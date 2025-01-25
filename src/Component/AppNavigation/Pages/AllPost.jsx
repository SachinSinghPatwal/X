import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import databaseService from "../../../AppwriteServices/DBService/DBService";

function AllPost({ styles = "h-full text-[18px] text-center ml-[-2rem]" }) {
  const screenStatus = useMediaQuery({ query: "(max-width:625px)" });
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    databaseService
      .getAllPost([])
      .then((posts) => posts && setPosts(posts.documents));
  }, []);
  return (
    <div className="border-x-[1px] border-gray-700 ">
      <header
        className={` fixed h-[3rem] grid place-items-center 
          border-gray-700 border-b-[1px]
        sm:w-[79.7vw] 
        md:w-[598px] 
        lg:w-[598px]
        backdrop-blur-sm
        w-[79.6vw]
        ${screenStatus && "w-[79.6vw]"}
      `}
      >
        <nav
          className={`h-fit w-[70vw] md:w-[523px]
            grid grid-cols-3
        `}
        >
          <div className={`${styles}`}>For you</div>
          <div className={`${styles}`}>Following</div>
          <div className={`${styles}`}>Preferences</div>
        </nav>
      </header>
      <main className="h-[300vh] pt-[3.5rem]">
        ost
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default AllPost;
