import React from "react";
import Loader from "../images/loading.svg";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <img src={Loader} alt="Loading..." srcSet="" />
    </div>
  );
};

export default Loading;
