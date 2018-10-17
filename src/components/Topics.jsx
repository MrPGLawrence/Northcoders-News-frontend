import React, { Component } from "react";
import "../css/Topics.css";
import * as api from "../api";
import { Link } from "@reach/router";

class Topics extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <main className="Topics">
        {topics.map(topic => {
          return (
            <div key={topic._id}>
              <Link to={`/topics/${topic.slug}/articles`}>
                <h1>{topic.title}</h1>
              </Link>
            </div>
          );
        })}
      </main>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    api.getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  };
}

export default Topics;
