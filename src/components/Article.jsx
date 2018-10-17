import React, { Component } from "react";
import * as api from "../api";
// import { Link } from "@reach/router";
import Comments from "./Comments";

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const { article } = this.state;
    return <main>
        <div className="article" key={article._id}>
          <h1>{article.title}</h1>
          <p className="article-p" >{article.body}</p>
          <Comments user={this.props.user} id={this.props._id} />
        </div>
      </main>;
  }

  componentDidMount() {
    api.getArticlesById(this.props._id).then(article => {
      this.setState({ article });
    });
  }
}

export default Article;
