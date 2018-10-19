import React from "react";
import { PulseLoader } from "react-spinners";

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="loader">
        <PulseLoader
          sizeUnit={"px"}
          size={20}
          color={"#c21331"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
