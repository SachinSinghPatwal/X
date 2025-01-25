import React from "react";

function PagesContainer({ children, className = "" }) {
  return <div className={`${className}`}>{children}</div>;
}

export default PagesContainer;
