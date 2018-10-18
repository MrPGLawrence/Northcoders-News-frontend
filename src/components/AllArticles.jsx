import React, { Component } from "react";
import "../css/article.css";
import * as api from "../api";
import { Link } from "@reach/router";

class AllArticles extends Component {
  state = {
    articles: []
  };
  render() {
    console.log(this.props);
    const { articles } = this.state;
    return (
      <main className="all-articles">
        {articles.map(article => {
          return (
            <div key={article._id} className="article-box">
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

export default AllArticles;
