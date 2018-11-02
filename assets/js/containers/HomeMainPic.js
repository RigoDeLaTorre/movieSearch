import React, { Component } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { fetchMovieDetails } from "../actions/selected";
import { connect } from "react-redux";
import Swiper from "react-id-swiper";

class HomeMainPic extends Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
  }
  // Navigation for movies/tv
  goNext() {
    if (this.swiper) this.swiper.slideNext();
  }
  // Navigation for movies/tv
  goPrev() {
    if (this.swiper) this.swiper.slidePrev();
  }

  // compares genre ids to the genre list in state and returns the name associated.
  filterGenre = id => {
    let genre = this.props.genres
      .filter(item => item.id === id[0] || item.id == id[1])
      .map(item => item.name);
    return (
      <h2>
        {genre[0]} {genre[1] ? "/" + genre[1] : ""}
      </h2>
    );
  };

  // Renders a movie for each upcmoming movie in state.
  getVideos = () => {
    return this.props.data.map(item => {
      return (
        <div
          key={item.id}
          className="swiper-slide"
          onClick={() => this.props.selectedItem(item.id)}
        >
          <div
            className="img"
            style={{
              backgroundImage: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original${
                item.backdrop_path
              }) `,
              backgroundSize: "cover",
              backgroundPosition: "center ",
              height: "100%",
              width: "100%"
            }}
          />
          <div className="info">
            <h1>{item.title ? item.title : item.name}</h1>
            {this.filterGenre(item.genre_ids)}
          </div>
        </div>
      );
    });
  };

  // Fetches Movie Details by passing in the id, then dispatching the method to retrieve the details by movie id.

  selectedItem = id => {
    console.log(id);
    this.props.fetchMovieDetails(id);
    this.props.history.push("/moviedetails");
  };
  render() {
    const params = {
      autoplay: {
        delay: 5000
      },
      setWrapperSize: true,
      init: true,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      observer: true,
      direction: "horizontal",
      pagination: {
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };

    if (!this.props.data) {
      return (
        <div className={!this.props.data ? "loading-screen" : "gone"}>
          Loading
        </div>
      );
    }

    return (
      <section id="home-mainpic">
        <Swiper {...params}>{this.getVideos()}</Swiper>
      </section>
    );
  }
}

function mapStatetoProps(state) {
  return {
    genres: state.movies.genreMovies.genres
  };
}
export default connect(
  mapStatetoProps,
  {
    fetchMovieDetails
  }
)(HomeMainPic);
