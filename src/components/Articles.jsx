import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/article.css";
import * as api from "../api";
import { Link } from "@reach/router";
import dateFormat from "dateformat";
import Loader from "./Loader";
import ArticlePoster from "./ArticlePoster";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    const { user = {}, location = {} } = this.props;
    return !this.state.articles.length ? (
      <Loader className="articles-Loader" />
    ) : (
      <>
        {location.pathname === "/articles" &&
          (!user.username ? (
            <h5>Log In to post an Article</h5>
          ) : (
            <ArticlePoster
              topics={this.props.topics}
              addArticle={this.addArticle}
            />
          ))}
        <main className="all-articles">
          {articles.map(article => {
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
          })}
        </main>
      </>
    );
  }

  componentDidMount() {
    api.getArticles(this.props.topic_slug).then(articles => {
      this.setState({ articles });
    });
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

Articles.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
  topics: PropTypes.array
};

export default Articles;
