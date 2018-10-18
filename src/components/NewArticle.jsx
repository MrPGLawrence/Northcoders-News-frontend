import React, { Component } from "react";
import * as api from "../api";
import ArticlePoster from "./ArticlePoster";

class NewArticle extends Component {
  render() {
    return (
      <div>
        <ArticlePoster addArticle={this.addArticle} />
      </div>
    );
  }

  addArticle = (title, body) => {
    api
      .postArticle(/*this.props.topicslug,*/ title, body, this.props.user._id)
      .then(article => {
        this.setState({
          articles: [article, ...this.state.articles]
        });
      });
  };
}

export default NewArticle;
