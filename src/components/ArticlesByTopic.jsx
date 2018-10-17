import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class ArticlesByTopic extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <main>
        <h1>{this.props.topic_slug}</h1>
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
    api.getArticlesByTopic(this.props.topic_slug).then(articles => {
      this.setState({ articles });
    });
  }
}

export default ArticlesByTopic;
