import React, { Component } from "react";
import * as api from "../api";

class Topics extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <main>
        {topics.map(topic => {
          return (
            <div key={topic._id}>
              <h1>{topic.title}</h1>
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
