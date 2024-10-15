import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#F7EDE8]">
        <div className="dot-wave">
          <div className="dot-wave__dot"></div>
          <div className="dot-wave__dot"></div>
          <div className="dot-wave__dot"></div>
          <div className="dot-wave__dot"></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
