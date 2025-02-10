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
  faRetweet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import EachPost from "./EachPost";
import Loader from "../../../Loader/Loader";
function IndividualPost() {
  const [post, setPost] = useState();
  const { slug } = useParams();
  const reactionOnPost = [
    { icon: faComment, color: "white", label: "message" },
    { icon: faRetweet, color: "white", label: "tweet" },
    { icon: faHeart, color: "white", label: "like" },
    { icon: faChartSimple, color: "white", label: "views" },
    { icon: faArrowUpFromBracket, color: "white", label: "share" },
  ];
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const mediumScreenStatus = useMediaQuery({ query: "(min-width:880px)" });
  useEffect(() => {
    if (slug) {
      databaseService
        .getPost(slug)
        .then((post) => {
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [slug]);
  if (loading) {
    return (
      <div className="`h-full w-full relative z-[10000000]">
        <Loader bg="black" />
      </div>
    );
  } else {
    return (
      <div
        className={`h-full w-full fixed xl:top-0 
    z-[1000001] grid grid-cols-1 ${
      mediumScreenStatus && "grid-cols-[auto_21rem]"
    } sm:grid-rows-1 
    bg-[#111212e0]
    `}
      >
        {/* left side */}
        <div>
          <div
            className={`h-[92vh] grid relative justify-items-center
            items-center duration-300 lg:px-[1rem] md:px-0 overflow-hidden 
            `}
          >
            <button
              className="absolute left-[2vw] transition-all duration-300 top-3
              text-gray-200 hover:text-[#7F48CD] 
              "
              onClick={() => navigate("../Home/allpost")}
            >
              <FontAwesomeIcon
                className="text-[30px]
                "
                icon={faXmark}
              />
            </button>
            <img
              src={fileService.getFilePreview(post.featuredImage)}
              alt={post.name}
              className="w-fit "
            />
          </div>
          <div className="grid place-items-center ">
            <div
              className="absolute bottom-[1rem]  w-full md:w-[60%] lg:w-[70%] 
              grid grid-cols-5 place-item-center"
            >
              {reactionOnPost.map(({ icon, label }) => (
                <button key={label} className={`text-gray-200`}>
                  <FontAwesomeIcon
                    icon={icon}
                    className="z-[1] relative"
                    size="lg"
                  />
                  <span className="ml-[.3rem]">·</span>
                  {icon == faChartSimple ? <span> 1 </span> : <span> 0 </span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* right side */}
        {mediumScreenStatus && (
          <div
            className={`text-gray-200 
            border-l-[1px] border-gray-700`}
          >
            <div className=" text-gray-200 border-b-[1px] border-inherit pb-[.4rem]">
              <EachPost
                post={{ ...post, featuredImage: "" }}
                gap="1rem"
                time={post.$createdAt}
              />
            </div>
            <div className="grid grid-cols-[70%_auto] items-center p-4 border-b-[1px] border-gray-600 text-gray-200">
              <div>
                <img
                  src={Google}
                  alt="pfp"
                  className="w-[24px] inline mr-[.8rem]"
                />
                Post you reply
              </div>
              <button
                className="bg-gray-800 rounded-[4rem] text-gray-200 w-[6rem] 
            h-[2.3rem]"
              >
                Reply
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default IndividualPost;
