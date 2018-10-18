import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = {
    voteModifier: 0
  };
  render() {
    console.log(this.props.votes, this.state.voteModifier);
    return (
      <div className="voter">
        <h3>Vote</h3>
        <button
          className="button-down"
          onClick={() => this.Vote("down")}
          disabled={this.state.voteModifier === -1}
        >
          -
        </button>
        <span className="rating">
          {this.props.votes && this.props.votes + this.state.voteModifier}
        </span>
        <button
          className="button-up"
          onClick={() => this.Vote("up")}
          disabled={this.state.voteModifier === 1}
        >
          +
        </button>
      </div>
    );
  }

  Vote = direction => {
    const newVote = direction === "up" ? 1 : -1;
    this.setState({ voteModifier: newVote });
    api.voteCount(this.props.id, this.props.type, direction).catch(err => {
      this.setState({ voteModifier: 0 });
    });
  };
}

export default Voter;
