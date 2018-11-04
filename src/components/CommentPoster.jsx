import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/CommentPoster.css";

class CommentPoster extends Component {
  state = {
    body: ""
  };
  render() {
    return (
      <form className="comment-poster" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.body}
          type="text"
          aria-label="comment body"
          onChange={this.handleChange}
          name="body"
        />
        <button>Post</button>
      </form>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.body);
    this.setState({
      body: ""
    });
  };
}

CommentPoster.propTypes = {
  addComment: PropTypes.func
};

export default CommentPoster;
