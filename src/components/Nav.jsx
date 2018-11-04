import React from "react";
import PropTypes from "prop-types";
import "../css/Nav.css";
import { Link } from "@reach/router";
import Login from "./Login";

const Nav = props => {
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
      <Login login={props.login} user={props.user} />
    </nav>
  );
};

Nav.propTypes = {
  user: PropTypes.object,
  login: PropTypes.func
};

export default Nav;
