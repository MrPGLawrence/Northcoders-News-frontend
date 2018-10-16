import React, { Component } from "react";
import * as api from "../api";

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const { article } = this.state;
    // console.log(article);
    return (
      <main>
        <div key={article._id}>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
        </div>
      </main>
    );
  }

  componentDidMount() {
    api.getArticlesById(this.props._id).then(article => {
      this.setState({ article });
    });
  }
}

export default Article;
