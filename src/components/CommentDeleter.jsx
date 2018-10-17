import React from "react";

const CommentDeleter = props => {
  return <button onClick={props.deleteComment}>Delete</button>;
};

export default CommentDeleter;
