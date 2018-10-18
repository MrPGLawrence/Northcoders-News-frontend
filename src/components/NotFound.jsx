import React from "react";

const NotFound = props => {
  return (
    <div>
      <h1>{props.location.state.msg}</h1>
      <img
        src={process.env.PUBLIC_URL + "/NC_news.jpg"}
        alt="Error 404: Page Not Found"
      />
    </div>
  );
};

export default NotFound;
