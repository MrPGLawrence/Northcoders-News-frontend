import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Users from "./components/Users";
import Topics from "./components/Topics";
import Article from "./components/Article";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Home path="/" />
          <Topics path="/topics" />
          <Users path="/users" />
          <Article path="/articles/:_id" />
          <User path="/users/:username" />
        </Router>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
