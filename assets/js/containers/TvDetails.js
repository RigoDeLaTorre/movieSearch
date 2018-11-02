import React, { Component } from "react";
import ReactDom from "react-dom";
import { fetchTvDetails } from "../actions/selected";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "./carousel.js";

class TvDetails extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  selectedItem = id => {
    this.props.fetchTvDetails(id);
    this.props.history.push("/tvdetails");
  };

  renderCast = () => {
    if (!this.props.movie.cast) {
      return "loading";
    } else {
      return this.props.movie.cast.map((person, i) => {
        while (i < 5) {
          return (
            <div className="member" key={i}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
              />
              <h3>{person.name}</h3>
            </div>
          );
        }
      });
    }
  };

  render() {
    if (this.props === undefined) {
      return <h1>loading</h1>;
    }

    return (
      <section id="movie-details">
        <div
          className="movie-container"
          style={{
            backgroundImage: `linear-gradient(0deg, rgb(2,2,2) 35%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original${
              this.props.movie.backdrop_path
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center center no-repeat"
          }}
        >
          <div className="movie-container">
            <div className="youtube-section">
              {this.props.movie.results ? (
                <iframe
                  src={`http://www.youtube.com/embed/${
                    this.props.movie.results
                      ? this.props.movie.results[0].key
                      : ""
                  }`}
                  allowFullScreen="allowFullScreen"
                  frameBorder="0"
                />
              ) : (
                <h2>Cant find clip :(</h2>
              )}
            </div>

            <div className="movie-info">
              <h1>{this.props.movie.title}</h1>
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
                    {this.props.movie.genres
                      ? this.props.movie.genres[0].name
                      : ""}
                  </h2>
                  <h2>
                    {this.props.movie.runtime ? this.props.movie.runtime : ""}
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

        <div className="video-container">
          <div className="section-title-header">
            <div className="mid-navigation">
              <Link to="/">
                <h1 style={{ border: "1px solid orange" }}>Movies</h1>
              </Link>
              <Link to="/tv">
                <h1>TV Shows</h1>
              </Link>
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
      </section>
    );
  }
}

function mapStatetoProps(state) {
  return {
    movie: state.selectedItem,
    popular: state.tv.popularTv.results,
    toprated: state.tv.topRatedTv.results,
    airingtoday: state.tv.airingTodayTv.results,
    thisweek: state.tv.airingThisWeekTv.results,
    genres: state.tv.genreTv.genres
  };
}
export default connect(
  mapStatetoProps,
  { fetchTvDetails }
)(TvDetails);
