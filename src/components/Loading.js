import React from "react";

const Loading = () => {
  return (
    <div div className="loadingBox">
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
        <div className="longfazers">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div>
      </div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
