import React, { Component } from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearchAll } from "../actions/search";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchSearchAll(this.state.searchTerm);
    this.props.history.push("/searchResults");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Search your favorite Movie, TV Show, or Actor"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default connect(
  null,
  { fetchSearchAll }
)(SearchField);
