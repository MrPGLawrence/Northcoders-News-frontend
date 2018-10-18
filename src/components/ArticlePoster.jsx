import React, { Component } from "react";

class ArticlePoster extends Component {
  state = {
    title: "",
    topic: "",
    body: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.title}
          type="text"
          aria-label="article title"
          onChange={this.handleTitleChange}
          name="title"
        />
        <select value={this.state.topic} onChange={this.handleTopicChange}>
          <option value="" disabled>
            Choose a Topic
          </option>
          {this.props.topics.map(topic => (
            <option key={topic._id} value={topic.slug}>
              {topic.title}
            </option>
          ))}
        </select>
        <textarea
          value={this.state.body}
          type="text"
          aria-label="article body"
          onChange={this.handleBodyChange}
          name="body"
        />
        <button>Post</button>
      </form>
    );
  }

  handleTitleChange = event => {
    const { value } = event.target;
    this.setState({ title: value });
  };

  handleTopicChange = event => {
    const { value } = event.target;
    this.setState({ topic: value });
  };

  handleBodyChange = event => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addArticle(this.state.topic, this.state.title, this.state.body);
    this.setState({
      title: "",
      topic: "",
      body: ""
    });
  };
}

export default ArticlePoster;
