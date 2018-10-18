import React, { Component } from "react";
import "./css/App.css";
import * as api from "./api";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Users from "./components/Users";
import Topics from "./components/Topics";
import Article from "./components/Article";
import User from "./components/User";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Comments from "./components/Comments";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    user: {},
    topics: []
  };
  render() {
    return (
      <div className="App">
        <Nav login={this.login} user={this.state.user} />
        <Router>
          <Home path="/" />
          <Articles
            path="/articles"
            user={this.state.user}
            topics={this.state.topics}
          />
          <Topics path="/topics" topics={this.state.topics} />
          <Users path="/users" />
          <Article path="/articles/:_id" user={this.state.user} />
          <User path="/users/:username" />
          <ArticlesByTopic path="/topics/:topic_slug/articles" />
          <Comments
            path="/articles/:articleid/comments"
            user={this.state.user}
          />
          <NotFound path="/error" />
          <NotFound default />
        </Router>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    );
  }

  componentDidMount() {
    this.getTopics();
    const user = sessionStorage.getItem("username");
    if (user) {
      this.setState({ user: JSON.parse(user) });
    }
  }

  getTopics = () => {
    api.getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  };

  login = username => {
    this.state.user.username
      ? this.setState({ user: {} })
      : api.getUsersByUsername(username).then(user => {
          sessionStorage.setItem(username, JSON.stringify(user));
          this.setState({ user });
        });
  };
}

export default App;
