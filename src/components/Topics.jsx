import React from "react";
import PropTypes from "prop-types";
import "../css/Topics.css";
import { Link } from "@reach/router";

const Topics = props => {
  const { topics } = props;
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

Topics.propTypes = {
  topics: PropTypes.array
};

export default Topics;
