import React, { Component }   from "react";
import { connect }            from "react-redux";

import { fetchWeather }       from "../../Actions/fetchweather";


class Search extends Component {
  state = { term: "" };

  onInputchange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFromSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="Search">
        <div className="container" style={{paddingTop:'20px'}}>
          <form onSubmit={this.onFromSubmit} className="input-group mb-3">
            <input
              type="text"
              placeholder="Get a five-day forecast"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputchange}
            />
            <span className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchWeather })(Search);
