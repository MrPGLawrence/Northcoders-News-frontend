import React, { Component } from "react";
import Articles from "./Articles";

class Home extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div className="Home">
        <header>
          <img
            className="header"
            src={process.env.PUBLIC_URL + "/NC_news.jpg"}
            alt="Header"
          />
        </header>
        <Articles />
      </div>
    );
  }
}

export default Home;
