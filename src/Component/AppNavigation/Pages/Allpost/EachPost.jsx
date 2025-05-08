import React, { useState, useEffect } from "react";
import Google from "../../../../Public/google.svg";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import fileService from "../../../../AppwriteServices/FileService/FileService";
import { useDispatch } from "react-redux";

function EachPost({ post, gap, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    async function fetchImage() {
      if (post.featuredImage) {
        const image = await fileService.getFileView(post.featuredImage);
        setImageUrl(image);
      }
    }
    fetchImage();
  }, [post.featuredImage]);

  return (
    <div className="grid grid-cols-[40px_auto] gap-[.8rem]">
      <div className="h-[40px]">
        <img loading="lazy" src={Google} alt="" />
      </div>
      <div
        className={`grid grid-rows-[20px_auto_auto]`}
        style={{ gap: `${!gap ? ".5rem" : gap}` }}
      >
        <div className="w-full text-[18px] text-[#7F48CD] font-bold">
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </div>
        <div className="w-full text-[14px]">{parse(post.content)}</div>
        <div className="bg-blue text-gray-200 w-full mt-[.5rem]">
          <div
            onClick={() => {
              navigate(`../../${post.$id}`);
            }}
            className="hover:cursor-pointer"
          >
            <div className="mt-[-.4rem] text-gray-400 text-[15px] ">{time}</div>
            {post.featuredImage && imageUrl ? (
              <img
                loading="lazy"
                src={imageUrl}
                alt={post.title}
                className="hover:scale-[103%] transition-all duration-300"
                style={{
                  outline: ".05rem solid #7B3BD4",
                  outlineOffset: "-1px",
                  borderRadius: ".2rem",
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachPost;
