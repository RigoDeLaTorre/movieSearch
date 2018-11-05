import React, { Component } from "react";
import ReactDom from "react-dom";
import { fetchSearchDetails } from "../actions/selected";
import { fetchSearchAll } from "../actions/search";
import { fetchActorDetails } from "../actions/actor";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MiddleNavigation from "../components/MiddleNavigation.js";
import Carousel from "./carousel.js";

class SelectionDetails extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  selectedItem = id => {
    let url = this.props.match.url;
    if (url === "/tvdetails" || url === "/tv") {
      this.props.fetchSearchDetails(id, "tv");
      this.props.history.push("/tvdetails");
    } else {
      this.props.fetchSearchDetails(id, "movie");
      this.props.history.push("/moviedetails");
    }
  };

  getActorBio = id => {
    this.props.fetchActorDetails(id);
    this.props.history.push("/actorProfile");
  };

  renderCast = () => {
    if (!this.props.movie.cast) {
      return "loading";
    } else {
      return this.props.movie.cast.map((person, i) => {
        while (i < 5) {
          return (
            <div
              className="member"
              key={i}
              onClick={() => this.getActorBio(person.id)}
            >
              <img
                src={
                  person.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                    : `/img/blankPerson.png`
                }
              />
              <h3>{person.name}</h3>
            </div>
          );
        }
      });
    }
  };
  showYoutubeClip = () => {
    if (
      this.props.movie.results == undefined ||
      this.props.movie.results[0] === null ||
      this.props.movie.results[0] === undefined
    ) {
      return <h2>Cant find the clip</h2>;
    } else {
      return (
        <iframe
          src={`http://www.youtube.com/embed/${
            this.props.movie.results[0].key
          }`}
          allowFullScreen="allowFullScreen"
          frameBorder="0"
        />
      );
    }
  };

  videoSelection = () => {
    let url = this.props.match.url;
    if (url === "/tvdetails" || url === "/tv") {
      return (
        <div className="video-container">
          <MiddleNavigation
            history={this.props.history}
            fetchSearchAll={this.props.fetchSearchAll}
            page="tv"
          />
          <Carousel
            selectedItem={this.selectedItem}
            fetchSearchDetails={this.props.fetchSearchDetails}
            genres={this.props.genresTv}
            movie={this.props.popularTv}
            title="popular"
          />
          <Carousel
            selectedItem={this.selectedItem}
            fetchSearchDetails={this.props.fetchSearchDetails}
            genres={this.props.genresTv}
            movie={this.props.topratedTv}
            title="top rated"
          />
          <Carousel
            selectedItem={this.selectedItem}
            fetchSearchDetails={this.props.fetchSearchDetails}
            genres={this.props.genresTv}
            movie={this.props.airingtodayTv}
            title="airing today"
          />
          <Carousel
            selectedItem={this.selectedItem}
            fetchSearchDetails={this.props.fetchSearchDetails}
            genres={this.props.genresTv}
            movie={this.props.thisweekTv}
            title="airing this week "
          />
        </div>
      );
    } else {
      return (
        <div className="video-container">
          <MiddleNavigation
            history={this.props.history}
            fetchSearchAll={this.props.fetchSearchAll}
            page="movie"
          />
          <Carousel
            selectedItem={this.selectedItem}
            fetchSearchDetails={this.props.fetchSearchDetails}
            movie={this.props.upcoming}
            title="Upcoming "
            genres={this.props.genres}
          />
          <Carousel
            selectedItem={this.selectedItem}
            fetchSearchDetails={this.props.fetchSearchDetails}
            movie={this.props.popular}
            title="Popular "
            genres={this.props.genres}
          />
          <Carousel
            selectedItem={this.selectedItem}
            fetchSearchDetails={this.props.fetchSearchDetails}
            movie={this.props.nowplaying}
            title="Now Playing "
            genres={this.props.genres}
          />
          <Carousel
            selectedItem={this.selectedItem}
            fetchSearchDetails={this.props.fetchSearchDetails}
            movie={this.props.toprated}
            title="Top Rated "
            genres={this.props.genres}
          />
        </div>
      );
    }
  };

  render() {
    console.log(this.props.match.url);
    if (this.props === undefined) {
      return <h1>loading</h1>;
    }

    return (
      <section id="selection-details-page">
        <div
          className="movie-container"
          style={{
            backgroundImage: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original${
              this.props.movie.backdrop_path
                ? this.props.movie.backdrop_path
                : this.props.movie.poster_path
            }) `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
          }}
        >
          <div className="movie-info-container desktop">
            <div className="youtube-section" />
            {this.showYoutubeClip()}
            <div className="movie-info">
              <h1>
                {this.props.match.url == "/tvdetails"
                  ? this.props.movie.name
                  : this.props.movie.title}
              </h1>
              <div className="details">
                <div className="rating">
                  <h2>Rating {this.props.movie.vote_average}</h2>
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 0 ? "checked" : ""
                    } `}
                  />
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 1 ? "checked" : ""
                    } `}
                  />
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 2 ? "checked" : ""
                    } `}
                  />
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 3 ? "checked" : ""
                    } `}
                  />
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 4 ? "checked" : ""
                    } `}
                  />
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 5 ? "checked" : ""
                    } `}
                  />
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 6 ? "checked" : ""
                    } `}
                  />
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 7 ? "checked" : ""
                    } `}
                  />
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 8 ? "checked" : ""
                    } `}
                  />
                  <span
                    className={`fa fa-star ${
                      this.props.movie.vote_average > 9 ? "checked" : ""
                    } `}
                  />
                </div>

                <div className="runtime">
                  <h2>
                    {this.props.movie.genres &&
                    this.props.movie.genres[0] !== undefined
                      ? this.props.movie.genres[0].name
                      : ""}
                  </h2>
                  <h2>
                    {this.props.match.url == "/tvdetails"
                      ? this.props.movie.episode_run_time
                      : this.props.movie.runtime}
                    min
                  </h2>
                  <h2>{this.props.movie.release_date}</h2>
                </div>
              </div>
              <p>{this.props.movie.overview}</p>
              <div className="cast">{this.renderCast()}</div>
            </div>
          </div>
        </div>
        <div className="movie-info-container mobile">
          <div className="youtube-section" />
          {this.showYoutubeClip()}
          <div className="movie-info">
            <h1>
              {this.props.match.url == "/tvdetails"
                ? this.props.movie.name
                : this.props.movie.title}
            </h1>
            <div className="details">
              <div className="rating">
                <h2>Rating {this.props.movie.vote_average}</h2>
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 0 ? "checked" : ""
                  } `}
                />
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 1 ? "checked" : ""
                  } `}
                />
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 2 ? "checked" : ""
                  } `}
                />
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 3 ? "checked" : ""
                  } `}
                />
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 4 ? "checked" : ""
                  } `}
                />
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 5 ? "checked" : ""
                  } `}
                />
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 6 ? "checked" : ""
                  } `}
                />
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 7 ? "checked" : ""
                  } `}
                />
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 8 ? "checked" : ""
                  } `}
                />
                <span
                  className={`fa fa-star ${
                    this.props.movie.vote_average > 9 ? "checked" : ""
                  } `}
                />
              </div>

              <div className="runtime">
                <h2>
                  {this.props.movie.genres &&
                  this.props.movie.genres[0] !== undefined
                    ? this.props.movie.genres[0].name
                    : ""}
                </h2>
                <h2>
                  {this.props.match.url == "/tvdetails"
                    ? this.props.movie.episode_run_time
                    : this.props.movie.runtime}
                  min
                </h2>
                <h2>{this.props.movie.release_date}</h2>
              </div>
            </div>
            <p>{this.props.movie.overview}</p>
            <div className="cast">{this.renderCast()}</div>
          </div>
        </div>
        {this.videoSelection()}
      </section>
    );
  }
}

function mapStatetoProps(state) {
  return {
    movie: state.selectedItem,
    popularTv: state.tv.popularTv.results,
    topratedTv: state.tv.topRatedTv.results,
    airingtodayTv: state.tv.airingTodayTv.results,
    thisweekTv: state.tv.airingThisWeekTv.results,
    genresTv: state.tv.genreTv.genres,
    upcoming: state.movies.upComingMovies.results,
    popular: state.movies.popularMovies.results,
    toprated: state.movies.topRatedMovies.results,
    nowplaying: state.movies.nowPlayingMovies.results,
    genres: state.movies.genreMovies.genres
  };
}
export default connect(
  mapStatetoProps,
  { fetchSearchDetails, fetchSearchAll, fetchActorDetails }
)(SelectionDetails);
