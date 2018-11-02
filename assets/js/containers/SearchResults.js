import React, { Component } from "react";
import ReactDom from "react-dom";
import SearchField from "../components/searchfield.js";
import { fetchSearchAll } from "../actions/search";
import { fetchSearchDetails } from "../actions/selected";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SearchResults extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  selectedItem = item => {
    let id = item.id;
    let type = item.media_type;
    this.props.fetchSearchDetails(id, type);
    if (type == "tv") {
      this.props.history.push("/Tvdetails");
    }
    if (type == "movie") {
      this.props.history.push("/Moviedetails");
    }
  };

  showResults = () => {
    if (!this.props.searchResults.results) {
      <div className="loading-screen">Loading...</div>;
    } else if (this.props.searchResults.results) {
      return this.props.searchResults.results.map((item, i) => {
        return (
          <div
            className="search-item"
            key={i}
            onClick={() => this.selectedItem(item)}
          >
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : `/img/notfoundImage.jpg`
              }
            />
            <h2>{item.title ? item.title : item.name}</h2>
          </div>
        );
      });
    }
  };

  render() {
    if (this.props.searchResults === undefined) {
      return <h1>loading</h1>;
    }

    return (
      <section id="search-results">
        <div className="section-title-header">
          <div className="mid-navigation">
            <h1 style={{ border: "1px solid orange" }}>Movies</h1>
            <Link to="/tv">
              <h1>TV Shows</h1>
            </Link>
            <SearchField history={this.props.history} />
          </div>
        </div>
        <div className="search-container">{this.showResults()}</div>
      </section>
    );
  }
}

function mapStatetoProps(state) {
  return {
    searchResults: state.searchResults
  };
}
export default connect(
  mapStatetoProps,
  { fetchSearchAll, fetchSearchDetails }
)(SearchResults);
