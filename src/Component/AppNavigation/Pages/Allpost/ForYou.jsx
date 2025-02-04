import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import databaseService from "../../../../AppwriteServices/DBService/DBService";
import Google from "../../../../Public/google.svg";
import fileService from "../../../../AppwriteServices/FileService/FileService";
function ForYou() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    databaseService.getAllPost([]).then((allPosts) => {
      if (allPosts) {
        setPosts(allPosts.documents);
      }
    });
  }, []);
  return (
    <>
      {posts.map((post) => (
        <div key={post.$id}>
          <div>
            <div
              className="border-b-[1px] max-h-[600px]  w-full 
            border-gray-600 text-white py-[10px] px-[1rem]"
            >
              <div className="grid grid-cols-[40px_auto] gap-[.8rem]">
                <div className="h-[40px]">
                  <img src={Google} alt="" />
                </div>
                <div
                  className="grid grid-rows-[20px_auto_auto] 
                gap-[.5rem]"
                >
                  <div className="w-full">{post.$id}</div>
                  <div className="w-full">{post.title}</div>
                  <div className="bg-blue text-white w-full mt-[.5rem]">
                    <img
                      src={fileService.getFilePreview(post.featuredImage)}
                      alt={post.title}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ForYou;
