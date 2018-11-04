import React, { Component } from "react";
import "../css/Users.css";
import * as api from "../api";
import { Link } from "@reach/router";
import Loader from "./Loader";

class Users extends Component {
  state = {
    users: []
  };
  render() {
    const { users } = this.state;
    return !this.state.users.length ? (
      <Loader />
    ) : (
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
    const user = sessionStorage.getItem("username");
    if (user) {
      this.setState({ user: JSON.parse(user) });
    }
  }

  getUsers = () => {
    api.getUsers().then(users => {
      this.setState({ users });
    });
  };
}

export default Users;
