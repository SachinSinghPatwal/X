import React, { useEffect, useState } from "react";
import databaseService from "../../../../AppwriteServices/DBService/DBService";
import Google from "../../../../Public/google.svg";
import fileService from "../../../../AppwriteServices/FileService/FileService";
import Loader from "../../../Loader/Loader";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeVisibility } from "../../../../store/authSlice";
import {
  faEllipsis,
  faPen,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ComposePost from "../ComposePost";

function ForYou() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activePostId, setActivePostId] = useState(null); // Track the toggled post
  const [isAuthor, setAuthor] = useState(null);
  useEffect(() => {
    databaseService.getAllPost([]).then((allPosts) => {
      if (allPosts) {
        setPosts(allPosts.documents);
      }
      setLoading(false);
    });
  }, []);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
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
                  className="absolute text-white bg-gray-800 p-2 rounded 
                right-1 grid top-1 h-fit w-[10rem] z-[1000] 
                grid-rows-[2rem_2rem] gap-[.2rem] grid-cols-[6rem] px-[.8rem] justify-items-start
                "
                >
                  <button
                    onClick={() =>
                      setActivePostId(activePostId === post.$id && null)
                    }
                    className="absolute right-[.8rem] top-[.3rem] w-fit"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  {isAuthor ? (
                    <>
                      <div className="p-[.2rem] ">
                        <button
                          onClick={() => {
                            databaseService
                              .deletePost(post.$id)
                              .then((status) => {
                                if (status) {
                                  fileService.deleteFile(post.featuredImage);
                                  navigate("../Home/allpost");
                                }
                              });
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "red" }}
                            className="mr-[.5rem]"
                          />
                          Delete
                        </button>
                      </div>
                      <div className="p-[.2rem] ">
                        <button
                          onClick={() => {
                            dispatch(changeVisibility(true));
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faPen}
                            style={{ color: "white" }}
                            className="mr-[.5rem]"
                          />
                          Update
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <button className="p-[.2rem] text-red-600">
                        Report !
                      </button>
                      <button className="p-[.2rem]">Pin</button>
                    </>
                  )}
                </div>
              )}
              <div
                className="relative border-b-[1px] max-h-[600px] 
              border-gray-600 text-white py-[.6rem] px-[1rem]"
              >
                {/* Toggle button */}
                <div
                  className="absolute top-2 right-4 hover:cursor-pointer z-[1]"
                  onClick={() => {
                    setAuthor(
                      post && userData ? post.userId === userData.$id : false
                    );
                    setActivePostId(activePostId !== post.$id && post.$id);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    size="lg"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="grid grid-cols-[40px_auto] gap-[.8rem]">
                  <div className="h-[40px]">
                    <img src={Google} alt="" />
                  </div>
                  <div className="grid grid-rows-[20px_auto_auto] gap-[.5rem]">
                    <div className="w-full text-[18px] text-[#7F48CD] font-bold">
                      {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                    </div>
                    <div className="w-full text-[14px]">
                      {parse(post.content)}
                    </div>
                    <div className="bg-blue text-white w-full mt-[.5rem]">
                      <img
                        src={fileService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        style={{
                          outline: ".05rem solid #7B3BD4",
                          outlineOffset: "-1px",
                          borderRadius: ".2rem",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
      )}
    </>
  );
}

export default ForYou;
