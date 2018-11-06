import React, { Component } from "react";
import ReactDom from "react-dom";
import { fetchSearchAll } from "../actions/search";
import { fetchSearchDetails } from "../actions/selected";
import { fetchActorDetails } from "../actions/actor";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MiddleNavigation from "../components/MiddleNavigation.js";
import Footer from "../components/Footer.js";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  selectedItem = item => {
    let id = item.id;
    let type = item.media_type;

    if (type == "tv") {
      this.props.fetchSearchDetails(id, type);
      this.props.history.push("/tvdetails");
    }
    if (type == "movie") {
      this.props.fetchSearchDetails(id, type);
      this.props.history.push("/moviedetails");
    }
    if (type == "person") {
      this.props.fetchActorDetails(id);
      this.props.history.push("/actorProfile");
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
                  : item.profile_path
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    : `/img/blankPerson.png`
              }
            />
            <h2>{item.title ? item.title : item.name}</h2>
          </div>
        );
      });
    }
  };

  handleNextPage = () => {
    let searchTerm = this.props.searchResults.searchTerm;
    let currentPage = this.props.searchResults.page;
    let totalpages = this.props.searchResults.total_pages;
    if (currentPage < totalpages) {
      let page = currentPage + 1;
      this.props.fetchSearchAll(searchTerm, page);
    }
  };
  handlePreviousPage = () => {
    let searchTerm = this.props.searchResults.searchTerm;
    let currentPage = this.props.searchResults.page;
    let totalpages = this.props.searchResults.total_pages;
    if (currentPage <= totalpages && currentPage > 1) {
      let page = currentPage - 1;
      this.props.fetchSearchAll(searchTerm, page);
    }
  };
  render() {
    if (this.props.searchResults === undefined) {
      return <h1>loading</h1>;
    }

    return (
      <section id="search-results">
        <Link to="/">
          <div className="logo">
            <img src="./img/logo.png" />
          </div>
        </Link>
        <MiddleNavigation
          history={this.props.history}
          fetchSearchAll={this.props.fetchSearchAll}
        />
        <div className="pagination-container">
          <h1>
            Page {this.props.searchResults.page} /{" "}
            {this.props.searchResults.total_pages}
          </h1>
          <div className="pagination">
            <button onClick={this.handlePreviousPage}>Previous</button>
            <button onClick={this.handleNextPage}>Next</button>
          </div>
        </div>

        <div className="search-container">{this.showResults()}</div>
        <div className="pagination-container">
          <h1>
            Page {this.props.searchResults.page} /{" "}
            {this.props.searchResults.total_pages}
          </h1>
          <div className="pagination">
            <button onClick={this.handlePreviousPage}>Previous</button>
            <button onClick={this.handleNextPage}>Next</button>
          </div>
        </div>
        <Footer />
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
  { fetchSearchAll, fetchSearchDetails, fetchActorDetails }
)(SearchResults);
