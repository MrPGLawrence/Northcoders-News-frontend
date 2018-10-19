import React, { Component } from "react";
import * as api from "../api";
import ArticlePoster from "./ArticlePoster";
import AllArticles from "./AllArticles";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div className="Articles">
        {!this.props.user.username ? (
          <h5>Log In to post an Article</h5>
        ) : (
          <ArticlePoster
            topics={this.props.topics}
            addArticle={this.addArticle}
          />
        )}
        <AllArticles />
      </div>
    );
  }

  addArticle = (topicslug, title, body) => {
    api
      .postArticle(topicslug, title, body, this.props.user._id)
      .then(article => {
        this.setState({
          articles: [article, ...this.state.articles]
        });
      });
  };
}

export default Articles;
