import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <main>
        {articles.map(article => {
          return (
            <div key={article._id}>
              <Link to={`/articles/${article._id}`}>
                <h2>{article.title}</h2>
              </Link>
            </div>
          );
        })}
      </main>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
