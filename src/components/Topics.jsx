import React from "react";
import "../css/Topics.css";
import { Link } from "@reach/router";

const Topics = props => {
  const { topics } = props;
  console.log(topics);
  return (
    <main className="Topics">
      {topics.map(topic => {
        return (
          <div key={topic._id}>
            <Link to={`/topics/${topic.slug}/articles`}>
              <h1>{topic.title}</h1>
            </Link>
          </div>
        );
      })}
    </main>
  );
};

export default Topics;
