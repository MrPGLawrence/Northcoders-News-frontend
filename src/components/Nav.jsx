import React, { Component } from "react";
import "../css/Nav.css";
import { Link } from "@reach/router";
import Login from "./Login";

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <nav className="nav">
        <Link to="/">
          {" "}
          <img
            style={{ width: 50, height: 50 }}
            alt="Home"
            src="https://www.businessupnorth.co.uk/wp-content/uploads/ultimatemember/998/profile_photo-190.png?1538952006"
          />{" "}
        </Link>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/users">Users</Link>
        <Login login={this.props.login} user={this.props.user} />
      </nav>
    );
  }
}

export default Nav;
