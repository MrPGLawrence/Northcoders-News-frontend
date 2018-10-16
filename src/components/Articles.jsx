import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    // console.log(this.state.articles.map(article => article._id));
    return (
      <main>
        {articles.map(article => {
          return (
            <div key={article._id}>
              <Link to={`/articles/${article._id}`}>
                <h1>{article.title}</h1>
                <h4>Topic: {article.belongs_to}</h4>
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
