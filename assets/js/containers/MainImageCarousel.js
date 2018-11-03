import React, { Component } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swiper from "react-id-swiper";

export default class MainImageCarousel extends Component {
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

  // Renders a movie for each upcmoming movie in state.
  getVideos = () => {
    console.log(this.props.type);
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
                item.backdrop_path ? item.backdrop_path : item.poster_path
              }) `,
              backgroundSize: "cover",
              backgroundPosition: "center ",
              height: "100%",
              width: "100%"
            }}
          />
          <div className="info">
            <h1>{this.props.type == "/tv" ? item.name : item.title}</h1>
            {this.props.filterGenre(item.genre_ids)}
          </div>
        </div>
      );
    });
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
      <section id="main-image-carousel">
        <Swiper {...params}>{this.getVideos()}</Swiper>
      </section>
    );
  }
}
