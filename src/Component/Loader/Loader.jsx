import React from "react";
import Animation from "../../Public/Animation.mp4";
function Loader({ bg, className = "" }) {
  return (
    <div className={`h-screen bg-[${bg}] place-items-center ${className}`}>
      <video
        height="120px"
        width="120px"
        src={Animation}
        loop
        muted
        autoPlay
        className="pt-[20vh]"
      />
    </div>
  );
}
export default Loader;
