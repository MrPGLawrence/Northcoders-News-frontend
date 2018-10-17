import React, { Component } from "react";
import { Link } from "@reach/router";
import Login from "./Login";

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    return <header className="header">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/users">Users</Link>
        <Login login={this.props.login} user={this.props.user} />
      </header>;
  }
}

export default Nav;
