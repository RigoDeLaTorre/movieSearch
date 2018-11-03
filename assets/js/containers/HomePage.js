import React, { Component } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import {
  fetchUpcomingMovies,
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchGenreMovie
} from "../actions/movies";
import {
  fetchPopularTv,
  fetchTopRatedTv,
  fetchAiringToday,
  fetchTvThisWeek,
  fetchGenreTv
} from "../actions/tv";
import { fetchSearchDetails } from "../actions/selected";
import { fetchSearchAll } from "../actions/search";
import { connect } from "react-redux";
import MainImageCarousel from "./MainImageCarousel.js";
import SearchField from "../components/searchfield.js";
import Carousel from "./carousel.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: 1,
      upcoming: 1,
      movieIndex: 0,
      searchTerm: ""
    };
  }
  componentWillMount() {
    this.props.fetchGenreMovie();
    this.props.fetchPopularMovies(this.state.popular);
    this.props.fetchUpcomingMovies();
    this.props.fetchNowPlayingMovies();
    this.props.fetchTopRatedMovies();
    this.props.fetchPopularTv();
    this.props.fetchTopRatedTv();
    this.props.fetchAiringToday();
    this.props.fetchTvThisWeek();
    this.props.fetchGenreTv();
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
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

  //TESTING THIS, not yet complete.....eventually I want to fetch a new page when the user swipes to the end of page 1.
  handlePopularPage = () => {
    this.setState(
      prevState => ({
        popular: prevState.popular + 1
      }),
      () => this.props.fetchPopularMovies(this.state.popular)
    );
  };
  selectedItem = id => {
    this.props.fetchSearchDetails(id, "movie");
    this.props.history.push("/moviedetails");
  };

  render() {
    console.log(this.props.match);
    if (!this.props.upcoming) {
      return (
        <div className={!this.props.upcoming ? "loading-screen" : "gone"}>
          Loading
        </div>
      );
    }

    return (
      <section className="home-page">
        <div className="main-image">
          <MainImageCarousel
            selectedItem={this.selectedItem}
            data={this.props.upcoming}
            genres={this.props.genres}
            filterGenre={this.filterGenre}
            type={this.props.match.url}
          />
        </div>

        <div className="video-container">
          <div className="section-title-header">
            <div className="mid-navigation">
              <h1 style={{ border: "1px solid orange" }}>Movies</h1>
              <Link to="/tv">
                <h1>TV Shows</h1>
              </Link>
              <SearchField history={this.props.history} />
            </div>
          </div>

          <Carousel
            selectedItem={this.selectedItem}
            movie={this.props.upcoming}
            title="Upcoming "
          />
          <Carousel
            selectedItem={this.selectedItem}
            movie={this.props.popular}
            title="Popular "
          />
          <Carousel
            selectedItem={this.selectedItem}
            movie={this.props.nowplaying}
            title="Now Playing "
          />
          <Carousel
            selectedItem={this.selectedItem}
            movie={this.props.toprated}
            title="Top Rated "
          />
        </div>
      </section>
    );
  }
}

function mapStatetoProps(state) {
  return {
    upcoming: state.movies.upComingMovies.results,
    popular: state.movies.popularMovies.results,
    toprated: state.movies.topRatedMovies.results,
    nowplaying: state.movies.nowPlayingMovies.results,
    genres: state.movies.genreMovies.genres
  };
}
export default connect(
  mapStatetoProps,
  {
    fetchUpcomingMovies,
    fetchPopularMovies,
    fetchNowPlayingMovies,
    fetchTopRatedMovies,
    fetchGenreMovie,
    fetchSearchDetails,
    fetchSearchAll,
    fetchPopularTv,
    fetchTopRatedTv,
    fetchAiringToday,
    fetchTvThisWeek,
    fetchGenreTv
  }
)(HomePage);
