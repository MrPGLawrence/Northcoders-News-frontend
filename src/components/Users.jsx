import React, { Component } from "react";
import "./Users.css";
import * as api from "../api";
import { Link } from "@reach/router";

class Users extends Component {
  state = {
    users: []
  };
  render() {
    const { users } = this.state;
    return (
      <main className="Users">
        {users.map(user => {
          return (
            <div key={user._id}>
              <Link to={`/users/${user.username}`}>
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
              </Link>
            </div>
          );
        })}
      </main>
    );
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    api.getUsers().then(users => {
      this.setState({ users });
    });
  };
}

export default Users;
