import React from "react";

function Input({ type = "text", Classname = "", by, ...props }, ref) {
  return (
    <input
      type={type}
      className={`bg-transparent border-gray-700 border-[1px] 
        rounded-[3px] text-white text-[18px] ${
          type == "password" ||
          type == "email" ||
          (type == "text" && "tracking-wide")
        }
                h-[3.1rem] w-full pt-3 pl-[.6rem] focus:ring-0
                ${Classname}
                ${type == "number" && "appearance-none no-spinner"}
                `}
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(Input);
