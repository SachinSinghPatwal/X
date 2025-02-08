import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import databaseService from "../../../../AppwriteServices/DBService/DBService";
import { useDispatch, useSelector } from "react-redux";
import { setOverFlowStatus } from "../../../../store/authSlice";
import fileService from "../../../../AppwriteServices/FileService/FileService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpFromBracket,
  faChartSimple,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import EachPost from "./EachPost";
function IndividualPost() {
  const [post, setPost] = useState();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const getOverFlowStatus = useSelector((state) => state.auth.overFlowStatus);
  const reactionOnPost = [
    faComment,
    faRetweet,
    faHeart,
    faChartSimple,
    faArrowUpFromBracket,
  ];
  useEffect(() => {
    dispatch(setOverFlowStatus("overflow-hidden"));
    if (slug) {
      databaseService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else "";
      });
    }
    console.log(post);
  }, []);
  useEffect(() => {
    // document.querySelector("html").classList.add(getOverFlowStatus);
    document.querySelector("html").classList.remove("overflow-hidden");
  }, [getOverFlowStatus]);
  return post ? (
    <div
      className={`h-[100dvh] w-[98.9vw] fixed left-0 top-0
    z-[1000000] grid grid-cols-1 grid-rows-[94vh_6vh] lg:grid-cols-[auto_21rem] sm:grid-rows-1 bg-[#111212e0]
    `}
    >
      <div className="relative">
        <div className="grid items-start justify-items-center w-full h-full">
          <img
            src={fileService.getFilePreview(post.featuredImage)}
            alt={post.name}
            className="w-fit h-fit"
          />
        </div>
        <div className="grid place-items-center w-full">
          <div className="absolute bottom-[.5rem] w-full lg:w-[70%] grid grid-cols-5 place-item-center">
            {reactionOnPost.map((each, index) => (
              <button key={index}>
                <FontAwesomeIcon
                  icon={each}
                  style={{ color: `white`, zIndex: "1", position: "relative" }}
                  size="lg"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className=" text-white hidden lg:block">
        <div className=" text-white">
          <EachPost post={{ ...post, featuredImage: "" }} />
        </div>
      </div>
    </div>
  ) : null;
}

export default IndividualPost;
