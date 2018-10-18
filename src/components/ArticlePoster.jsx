import React, { Component } from "react";

class ArticlePoster extends Component {
  state = {
    title: "",
    body: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          aria-label="article title"
          onChange={this.handleChange}
          name="title"
        />
        <input
          type="text"
          aria-label="article body"
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
    this.props.addArticle(this.state.body);
  };
}

export default ArticlePoster;
