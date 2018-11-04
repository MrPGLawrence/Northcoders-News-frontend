import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Comments.css";
import * as api from "../api";
import CommentPoster from "./CommentPoster";
import CommentDeleter from "./CommentDeleter";
import Voter from "./Voter";
import { Link } from "@reach/router";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <main className="comments-body">
        <h3>Comments</h3>
        {!this.props.user.username ? (
          <h5>Log In to post a Comment</h5>
        ) : (
          <CommentPoster addComment={this.addComment} />
        )}
        {comments.map(comment => {
          return (
            <div className="comment" key={comment._id}>
              <p className="comment-p">{comment.body}</p>
              <p>
                <Link
                  className="comment-username"
                  to={`/users/${comment.created_by.username}`}
                >
                  <img
                    className="nav-pic"
                    src={comment.created_by.avatar_url}
                    alt="Avatar"
                  />
                  {comment.created_by.username}
                </Link>
              </p>
              <Voter id={comment._id} votes={comment.votes} type="comments" />
              {this.props.user.username === comment.created_by.username && (
                <CommentDeleter
                  deleteComment={() => this.deleteComment(comment._id)}
                />
              )}
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

  addComment = body => {
    api.postComment(this.props.id, body, this.props.user._id).then(comment => {
      this.setState({
        comments: [comment, ...this.state.comments]
      });
    });
  };

  deleteComment = id => {
    api.deleteComment(id).then(() => {
      this.setState({
        comments: this.state.comments.filter(comment => comment._id !== id)
      });
    });
  };
}

Comments.propTypes = {
  user: PropTypes.object,
  id: PropTypes.string
};

export default Comments;
