import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader">
      <ClipLoader sizeUnit={"px"} size={75} color={"#c21331"} />
    </div>
  );
};

export default Loader;
