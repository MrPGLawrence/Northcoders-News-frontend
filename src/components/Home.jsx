import React, { Component } from "react";
import Articles from "./Articles";

class Home extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div className="Home">
        <Articles />
      </div>
    );
  }
}

export default Home;
