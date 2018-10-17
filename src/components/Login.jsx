import React, { Component } from "react";
import { Link } from "@reach/router";

class Login extends Component {
  state = {
    username: "tickle122"
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login">
        {!this.props.user.username ? (
          <>
            <label htmlFor="username" />
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <button>Log In</button>
          </>
        ) : (
          <>
            <button>Log Out</button>
            <Link to={`/users/${this.state.username}`}>
              {this.props.user.name}
            </Link>
          </>
        )}
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username);
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
}

export default Login;
