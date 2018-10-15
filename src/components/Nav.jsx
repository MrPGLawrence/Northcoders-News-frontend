import React, { Component } from "react";
import { Link } from "@reach/router";
// import * as api from ../ api.js;

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <nav className="navigation">
        {/* //     <Link to="/">
        // Home
        //     </link> */}
      </nav>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  };
}
