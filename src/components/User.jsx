import React, { Component } from "react";
import * as api from "../api";

class User extends Component {
  state = {
    user: {}
  };
  render() {
    const { user } = this.state;
    return (
      <main>
        <div className="user" key={user._id}>
          <img
            className="user-image"
            src={user.avatar_url}
            alt={`${user.name} Avatar`}
            onError={err => {
              err.target.onerror = null;
              err.target.src =
                "https://static1.squarespace.com/static/56c48e10cf80a1474d506114/t/5b71a6d9aa4a992d00a01d18/1534174950133/No-Profile.png";
            }}
          />
          <h1>{user.name}</h1>
          <p>{user.username}</p>
        </div>
      </main>
    );
  }

  componentDidMount() {
    api.getUsersByUsername(this.props.username).then(user => {
      this.setState({ user });
    });
  }
}

export default User;
