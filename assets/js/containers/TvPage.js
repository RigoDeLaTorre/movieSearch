import React, { Component } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import {
  fetchPopularTv,
  fetchTopRatedTv,
  fetchAiringToday,
  fetchTvThisWeek,
  fetchGenreTv,
  fetchTvDetails,
  fetchTvCredits
} from "../actions/tv";

import { connect } from "react-redux";
import HomeMainPic from "./homemainpic.js";
import Carousel from "./carousel.js";

class TvPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: 1,
      upcoming: 1,
      movieIndex: 0
    };
  }
  componentWillMount() {
    this.props.fetchPopularTv();
    this.props.fetchTopRatedTv();
    this.props.fetchAiringToday();
    this.props.fetchTvThisWeek();
    this.props.fetchGenreTv();
  }

  filterGenre = id => {
    let genre = this.props.genres
      .filter(item => item.id === id[0] || item.id == id[1])
      .map(item => item.name);
    return (
      <h2>
        {genre[0]} / {genre[1] ? genre[1] : ""}
      </h2>
    );
  };

  selectedItem = id => {
    console.log(id);
    this.props.fetchTvDetails(id);
    this.props.history.push("/tv");
  };

  render() {
    if (!this.props.popular) {
      return (
        <div className={!this.props.popular ? "loading-screen" : "gone"}>
          Loading
        </div>
      );
    }

    return (
      <section className="home-page">
        <div className="main-image">
          <HomeMainPic
            selectedItem={this.selectedItem}
            data={this.props.popular}
          />
          <div className="main-details">
            <h1>{this.props.popular[this.state.movieIndex].name}</h1>
            {this.filterGenre(
              this.props.popular[this.state.movieIndex].genre_ids
            )}
            <h3>Rating ***** </h3>
          </div>
        </div>

        <div className="video-container">
          <div className="section-title-header">
            <div className="mid-navigation">
              <Link to="/">
                <h1>Movies</h1>
              </Link>
              <h1 style={{ border: "1px solid orange" }}>TV Shows</h1>
            </div>
          </div>
          <Carousel
            selectedItem={this.selectedItem}
            movie={this.props.popular}
            title="popular"
          />
          <Carousel
            selectedItem={this.selectedItem}
            movie={this.props.toprated}
            title="top rated"
          />
          <Carousel
            selectedItem={this.selectedItem}
            movie={this.props.airingtoday}
            title="airing today"
          />
          <Carousel
            selectedItem={this.selectedItem}
            movie={this.props.thisweek}
            title="airing this week "
          />
        </div>
        <div className="section-title-header">
          <h1>TV Shows</h1>
        </div>
      </section>
    );
  }
}

function mapStatetoProps(state) {
  return {
    popular: state.tv.popularTv.results,
    toprated: state.tv.topRatedTv.results,
    airingtoday: state.tv.airingTodayTv.results,
    thisweek: state.tv.airingThisWeekTv.results,
    genres: state.tv.genreTv.genres
  };
}
export default connect(
  mapStatetoProps,
  {
    fetchPopularTv,
    fetchTopRatedTv,
    fetchAiringToday,
    fetchTvThisWeek,
    fetchGenreTv,
    fetchTvCredits,
    fetchTvDetails
  }
)(TvPage);
