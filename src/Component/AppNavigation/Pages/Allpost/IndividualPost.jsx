import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import databaseService from "../../../../AppwriteServices/DBService/DBService";
import fileService from "../../../../AppwriteServices/FileService/FileService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import Google from "../../../../Public/google.svg";
import {
  faArrowUpFromBracket,
  faChartSimple,
  faCircleChevronLeft,
  faCircleChevronRight,
  faEllipsis,
  faRetweet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import EachPost from "./EachPost";
import Loader from "../../../Loader/Loader";
function IndividualPost() {
  const [post, setPost] = useState();
  const { slug } = useParams();
  const [toggleLeftSideContent, setToggleLeftSideContent] = useState("hidden");
  const reactionOnPost = [
    faComment,
    faRetweet,
    faHeart,
    faChartSimple,
    faArrowUpFromBracket,
  ];
  const upperNavigationStatus = useMediaQuery({ query: "(max-width:768px)" });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (slug) {
      databaseService.getPost(slug).then((post) => {
        if (post) {
          const date = new Date(post.$createdAt);
          const time = date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            timeZone: "UTC",
          });
          const formattedDate = date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          });
          post.$createdAt = `${time} · ${formattedDate}`;
          setPost(post);
        }
      });
    }
    setLoading(false);
  }, [slug]);
  return post ? (
    loading ? (
      <div className="`h-full w-full fixed z-[1000000]">
        <Loader bg="black" />
      </div>
    ) : (
      <div
        className={`h-full w-full fixed xl:top-0 justify-items-center
    z-[1000001] grid grid-cols-1 md:grid-cols-[auto_21rem] sm:grid-rows-1 
    bg-[#111212e0]
    `}
      >
        {/* left side */}
        <div>
          <div
            className={`h-[92vh] grid justify-items-center relative
            items-center duration-300 overflow-hidden lg:px-[2rem] md:px-[1rem] 
            ${toggleLeftSideContent == "block" ? "" : "w-screen"}
            `}
          >
            <img
              src={fileService.getFilePreview(post.featuredImage)}
              alt={post.name}
              className="lg:max-w-fit w-full h-fit "
            />
            <div
              className="absolute grid grid-flow-col justify-between w-full 
          px-[2.5vw] top-4"
            >
              <button className="h-fit w-fit">
                <FontAwesomeIcon
                  icon={faXmark}
                  size="xl"
                  style={{ color: "white" }}
                  onClick={() => navigate("../Home/allpost")}
                />
              </button>
              <button className="h-fit w-fit">
                {upperNavigationStatus ? (
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    size="xl"
                    style={{ color: "white" }}
                  />
                ) : toggleLeftSideContent == "hidden" ? (
                  <FontAwesomeIcon
                    icon={faCircleChevronLeft}
                    style={{ color: "white" }}
                    size="xl"
                    onClick={() => setToggleLeftSideContent("block")}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircleChevronRight}
                    size="xl"
                    onClick={() => setToggleLeftSideContent("hidden")}
                  />
                )}
              </button>
            </div>
          </div>
          <div className="grid place-items-center ">
            <div
              className="absolute bottom-[1rem]  w-full lg:w-[70%] grid grid-cols-5 
          place-item-center"
            >
              {reactionOnPost.map((each, index) => (
                <button key={index}>
                  <FontAwesomeIcon
                    icon={each}
                    style={{
                      color: `white`,
                      zIndex: "1",
                      position: "relative",
                    }}
                    size="lg"
                  />
                  <span className="ml-[.3rem]">·</span>
                  {each == faChartSimple ? <span> 1 </span> : <span> 0 </span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* right side */}
        {toggleLeftSideContent == "block" && (
          <div
            className={` text-white 
      md:${toggleLeftSideContent} 
      ${toggleLeftSideContent && "w-[21.5rem]"} 
      border-l-[1px] border-gray-700`}
          >
            <div className=" text-white border-b-[1px] border-inherit pb-[.4rem]">
              <EachPost
                post={{ ...post, featuredImage: "" }}
                gap="1rem"
                time={post.$createdAt}
              />
            </div>
            <div className="grid grid-cols-[70%_auto] items-center p-4 border-b-[1px] border-gray-600 text-gray-500">
              <div>
                <img
                  src={Google}
                  alt="pfp"
                  className="w-[24px] inline mr-[.8rem]"
                />
                Post you reply
              </div>
              <button
                className="bg-gray-800 rounded-[4rem] text-gray-500 w-[6rem] 
            h-[2.3rem]"
              >
                Reply
              </button>
            </div>
          </div>
        )}
      </div>
    )
  ) : null;
}

export default IndividualPost;
