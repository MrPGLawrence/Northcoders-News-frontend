import React, { Component } from "react";
import "../css/article.css";
import * as api from "../api";
import { Link } from "@reach/router";
import dateFormat from "dateformat";
import Loader from "./Loader";

class AllArticles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <main className="all-articles">
        {!this.state.articles.length ? (
          <Loader />
        ) : (
          articles.map(article => {
            return (
              <div key={article._id} className="article-box">
                <Link to={`/articles/${article._id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <p>
                  Posted By:
                  <Link
                    className="article-username"
                    to={`/users/${article.created_by.username}`}
                  >
                    {" " + article.created_by.username}
                  </Link>
                </p>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
                <p>
                  Published:
                  {dateFormat(
                    article.created_at,
                    ' d mmmm yyyy "at"  h:MM TT '
                  )}
                </p>
              </div>
            );
          })
        )}
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
