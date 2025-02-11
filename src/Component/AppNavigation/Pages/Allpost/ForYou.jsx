import React, { useEffect, useState, useCallback } from "react";
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

  // Fetching Posts
  const gettingData = () => {
    setLoading(true);
    databaseService.getAllPost([]).then((allPosts) => {
      if (allPosts) {
        setPosts(allPosts.documents);
      }
      setLoading(false);
    });
  };
  useEffect(() => {
    gettingData();
  }, [forceReload]);

  const deletePost = (postId, featuredImage) => {
    databaseService.deletePost(postId).then((status) => {
      if (status) {
        fileService.deleteFile(featuredImage);
        gettingData();
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
                  className="absolute text-gray-200 bg-gray-800 p-2 rounded 
                right-1 grid top-1 h-fit w-[15.5rem] z-[1000] 
                grid-rows-auto gap-[.8rem] px-[1rem] py-[1rem] 
                justify-items-start 
                "
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
                          className="w-full"
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "red" }}
                            className="w-[23px] mr-[.5rem]"
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
                            className="w-[23px] mr-[.5rem]"
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
                  className="absolute top-2 right-4 hover:cursor-pointer z-[1]"
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
                    size="lg"
                    style={{ color: "white" }}
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

export default ForYou;
