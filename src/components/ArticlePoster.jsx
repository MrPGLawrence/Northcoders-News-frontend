import React, { Component } from "react";
import "../css/ArticlePoster.css";

class ArticlePoster extends Component {
  state = {
    title: "",
    topic: "",
    body: ""
  };
  render() {
    return (
      <form className="article-poster" onSubmit={this.handleSubmit}>
        <input
          placeholder="Title"
          value={this.state.title}
          type="text"
          aria-label="article title"
          onChange={this.handleTitleChange}
          name="title"
        >
        </input>
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
          placeholder="Write something here..."
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
