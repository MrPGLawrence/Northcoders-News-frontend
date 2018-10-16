import React, { Component } from "react";
import { Link } from "@reach/router";

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/users">Users</Link>
      </header>
    );
  }
}

export default Nav;
