import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../api";
import * as FontAwesome from "react-icons/fa";

class Voter extends Component {
  state = {
    voteModifier: 0
  };
  render() {
    return (
      <div className="voter">
        <button
          className="button-down"
          onClick={() => this.vote("down")}
          disabled={this.state.voteModifier === -1}
        >
          <FontAwesome.FaThumbsDown />
        </button>
        <span className="rating">
          {this.props.votes !== undefined &&
            this.props.votes + this.state.voteModifier}
        </span>
        <button
          className="button-up"
          onClick={() => this.vote("up")}
          disabled={this.state.voteModifier === 1}
        >
          <FontAwesome.FaThumbsUp />
        </button>
      </div>
    );
  }

  vote = direction => {
    api.voteCount(this.props.id, this.props.type, direction);
    const newVote =
      direction === "up"
        ? this.state.voteModifier + 1
        : this.state.voteModifier - 1;
    this.setState({ voteModifier: newVote });
  };
}

Voter.propTypes = {
  votes: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string
};

export default Voter;
