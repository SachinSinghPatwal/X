import React from "react";

function Input({ type = "text", classname = "text-white", by, ...props }, ref) {
  return (
    <input
      type={type}
      className={`bg-transparent border-gray-700 border-[1px] rounded-[3px]
                h-[3.1rem] w-full pt-3 text-[16px] pl-2 focus:ring-0
                ${by == "dates" && "text-[18px]"} ${classname}`}
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(Input);
