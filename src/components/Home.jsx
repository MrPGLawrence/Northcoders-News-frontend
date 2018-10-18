import React from "react";
import AllArticles from "./AllArticles";

const Home = () => {
  return (
    <div className="Home">
      <header>
        <img
          className="header"
          src={process.env.PUBLIC_URL + "/NC-news.jpg"}
          alt="Header"
        />
      </header>
      <AllArticles />
    </div>
  );
};

export default Home;
