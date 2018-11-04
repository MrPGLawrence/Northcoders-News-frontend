import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../api";
import { navigate } from "@reach/router";
import Comments from "./Comments";
import Voter from "./Voter";
import Loader from "./Loader";

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    const { article } = this.state;
    return !this.state.article.body ? (
      <Loader />
    ) : (
      <main>
        <div className="article" key={article._id}>
          <h1>{article.title}</h1>
          <p className="article-body">{article.body}</p>
          <Voter
            id={this.state.article._id}
            votes={this.state.article.votes}
            type="articles"
          />
          <Comments user={this.props.user} id={this.props._id} />
        </div>
      </main>
    );
  }

  componentDidMount() {
    api
      .getArticlesById(this.props._id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => {
        navigate("/error", { replace: true, state: { msg: err.message } });
      });
  }
}

Article.propTypes = {
  _id: PropTypes.string,
  user: PropTypes.object
};

export default Article;
