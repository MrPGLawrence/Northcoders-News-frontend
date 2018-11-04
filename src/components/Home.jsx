import React from "react";
import Articles from "./Articles";
import header from "../assets/NC-news.jpg";

const Home = ({ location, topics, user }) => {
  return (
    <div className="Home">
      <header>
        <img className="header" src={header} alt="Header" />
      </header>
      <Articles location={location} topics={topics} user={user} />
    </div>
  );
};

export default Home;
