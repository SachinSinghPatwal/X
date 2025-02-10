import React, { useEffect, useState } from "react";
import { Message, Loader } from "../../index";
function ComposePost() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [loading]);
  return (
    <div
      className="text-gray-200 absolute top-[20vh] left-[3vw] h-[301px] 
      xl:left-[46.6%] 
    md:w-[550px] sm:w-[76vw] w-[80vw] "
    >
      {loading ? (
        <div
          className="absolute w-full h-full bottom-[1px] rounded-[10px] 
        bg-black z-[100000] grid place-items-center"
        >
          <Loader bg={"black"} className="mt-[40%] absolute" />
        </div>
      ) : (
        ""
      )}
      <div className="absolute w-full ">
        <Message />
      </div>
    </div>
  );
}

export default ComposePost;
