import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = {
    voteModifier: 0
  };
  render() {
    return (
      <div className="voter">
        <h3>Vote</h3>
        <button
          className="button-down"
          onClick={() => this.vote("down")}
          disabled={this.state.voteModifier === -1}
        >
          -
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
          +
        </button>
      </div>
    );
  }
  // componentDidUpdate(prevProps, prevState) {

  // }

  vote = direction => {
    api.voteCount(this.props.id, this.props.type, direction);
    // change voteModifier in this state
    // change props => go to article and change votes => rerender
    const newVote = direction === "up" ? 1 : this.state.voteModifier - 1;
    this.setState({ voteModifier: newVote });
  };
}

export default Voter;
