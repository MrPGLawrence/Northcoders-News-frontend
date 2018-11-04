import React from "react";
import PropTypes from "prop-types";
import image from "../assets/NC-news-error.jpg";

const NotFound = props => {
  return (
    <div>
      <h1>{props.location.state.msg}</h1>
      <img
        className="error-image"
        src={image}
        alt="Error 404: Page Not Found"
      />
    </div>
  );
};

NotFound.propTypes = {
  location: PropTypes.object
};

export default NotFound;
