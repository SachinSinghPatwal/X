import React, { useState } from "react";
import authService from "../../../../AppwriteServices/Auth/Auth";
import { Databases } from "appwrite";
function ForYou() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      {/* {posts.map((post) => (
        <div key={post.$id} className="p-2 w-1/4">
          <PostCard {...post} />
        </div>
      ))} */}
    </div>
  );
}

export default ForYou;
