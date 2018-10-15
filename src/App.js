import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Link to="/">Home</Link>
        </header>
        <main>
          <p>main</p>
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
