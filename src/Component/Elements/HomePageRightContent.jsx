import React from "react";
function HomePageRightContent() {
  return (
    <aside className=" hidden xl:block xl:w-[320px] h-full">
      <input
        className="sticky top-[1rem] w-[90%] rounded-[4rem] placeholder:text-[17px] focus:outline focus:outline-[#9a57f8]  bg-transparent text-gray-400
              placeholder:text-gray-200 h-[2.5rem] border-[1px] border-gray-500 
              pl-[5%]
              mx-[1rem]
              "
        placeholder="Search"
      ></input>
      <div
        className="border-[1px] border-gray-600 mx-[1rem] sticky
          top-20 p-[1rem] rounded-[1rem] text-gray-200 
          "
      >
        <h1 className="text-[20px] font-semibold">Get Premium now</h1>
        <p className="mt-[.5rem]">
          For a limited time get 10% off and Unlock the best
        </p>
        <button
          className="rounded-[4rem]  mt-[1rem] border-[1px] 
                border-gray-600 py-[.5rem] px-[1rem] w-[10rem] font-bold 
              hover:bg-gray-900 transition-[background] duration-300"
        >
          Subscribe
        </button>
      </div>
      <div
        className="border-gray-600 border-[1px] px-[.3rem] py-[.5rem] 
            sticky top-[50%] mx-[1rem] rounded-md text-center text-[20px] 
            text-white"
      >
        ! Still in development
      </div>
    </aside>
  );
}

export default HomePageRightContent;
