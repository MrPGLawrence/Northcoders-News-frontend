import React, { Component } from "react";
import * as api from "../api";
import CommentPoster from "./CommentPoster";
// import { Link } from "@reach/router";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <main className="comment-body">
        <h1>Comments</h1>
        <CommentPoster />
        {comments.map(comment => {
          return (
            <div key={comment._id}>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </main>
    );
  }

  componentDidMount() {
    api.getCommentsForArticle(this.props.id).then(comments => {
      this.setState({ comments });
    });
  }

  addComment = (id, body) => {
    api.postComment(id, body, this.props.user._id).then(comment => {
      this.setState({
        comments: { comment, ...this.state.comments }
      });
    });
  };
}

export default Comments;
