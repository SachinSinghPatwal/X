import React, { useEffect, useState, memo } from "react";
import databaseService from "../../../../AppwriteServices/DBService/DBService";
import fileService from "../../../../AppwriteServices/FileService/FileService";
import Loader from "../../../Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeVisibility } from "../../../../store/authSlice";
import {
  faEllipsis,
  faPen,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Elements/Button";
import EachPost from "./EachPost";
import conf from "../../../../Conf/Conf";

function ForYou() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePostId, setActivePostId] = useState(null);
  const [isAuthor, setAuthor] = useState(null);
  const forceReload = useSelector((state) => state.auth.forceReload);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const composePostVisibility = useSelector(
    (state) => state.auth.composePostVisibility
  );
  const fetchPosts = async () => {
    setLoading(true);
    const allPosts = await databaseService.getAllPost([]);
    if (allPosts) {
      setPosts(allPosts.documents);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
    const unsubscribe = databaseService.client.subscribe(
      `databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteCollectionId}.documents`,
      (response) => {
        const eventType = response.events[0];
        setPosts((prevPosts) => {
          if (eventType.includes("create")) {
            return [...prevPosts, response.payload];
          } else if (eventType.includes("update")) {
            return prevPosts.map((post) =>
              post.$id === response.payload.$id ? response.payload : post
            );
          } else if (eventType.includes("delete")) {
            return prevPosts.filter(
              (post) => post.$id !== response.payload.$id
            );
          }
          return prevPosts;
        });
      }
    );

    return () => unsubscribe();
  }, [forceReload]);

  const deletePost = (postId, featuredImage) => {
    databaseService.deletePost(postId).then((status) => {
      if (status) {
        fileService.deleteFile(featuredImage);
      }
    });
  };

  return (
    <>
      {loading ? (
        <Loader bg="black" className="w-full" />
      ) : (
        posts
          .slice()
          .reverse()
          .map((post) => (
            <div key={post.$id} className="relative">
              {activePostId === post.$id && (
                <div
                  className="absolute text-gray-200 bg-transparent
                  backdrop-blur-[10px] p-2 rounded 
                right-1 grid top-1 h-fit w-[15.5rem] z-[1000] grid-rows-auto 
                gap-[.8rem] px-[1rem] py-[1rem] justify-items-start"
                >
                  <button
                    onClick={() => setActivePostId(null)}
                    className="absolute right-[.8rem] top-[.3rem] w-fit"
                  >
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                  </button>
                  {isAuthor ? (
                    <>
                      <div>
                        <button
                          onClick={() => {
                            deletePost(post.$id, post.featuredImage);
                            setActivePostId(null);
                            dispatch(changeVisibility(false));
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "red" }}
                            className="w-[23px] mr-[.5rem] "
                          />
                          Delete
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            dispatch(changeVisibility(!composePostVisibility));
                            setActivePostId(null);
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faPen}
                            style={{ color: "white" }}
                            className="w-[23px] mr-[.5rem] "
                          />
                          Update
                        </button>
                      </div>
                    </>
                  ) : (
                    <Button
                      calledBy={"optionsInForYouMoreButton"}
                      setActivePostId={setActivePostId}
                    />
                  )}
                </div>
              )}
              <div
                className="relative border-b-[1px] max-h-[600px] 
              border-gray-600 text-gray-200 py-[.8rem] px-[1rem]"
              >
                <div
                  className="absolute top-2 right-4 hover:cursor-pointer z-[1] 
                  h-[23px] aspect-square text-center rounded-full  
                  border-gray-200 border-[2px] hover:bg-[#7B3BD4] 
                  transition-colors duration-300 text-white hover:text-black 
                  hover:border-black
                  "
                  onClick={() => {
                    setAuthor(
                      post && userData ? post.userId === userData.$id : false
                    );
                    setActivePostId(
                      activePostId !== post.$id ? post.$id : null
                    );
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    size="sm"
                    className="mb-[2px]"
                  />
                </div>
                <EachPost post={post} />
              </div>
            </div>
          ))
      )}
    </>
  );
}

export default memo(ForYou);
