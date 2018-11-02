webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSearchAll = exports.FETCH_SEARCH_ALL = undefined;

var _axios = __webpack_require__(76);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_SEARCH_ALL = exports.FETCH_SEARCH_ALL = "fetch_search_all";

var fetchSearchAll = exports.fetchSearchAll = function fetchSearchAll(searchTerm) {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/search/multi?" + _config.API_KEY + "&query=" + searchTerm).then(function (res) {
      return dispatch({
        type: FETCH_SEARCH_ALL,
        payload: res.data
      });
    });
  };
};

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTvTrailers = exports.fetchTvCredits = exports.fetchTvDetails = exports.fetchTvThisWeek = exports.fetchAiringToday = exports.fetchTopRatedTv = exports.fetchLatestTv = exports.fetchPopularTv = exports.fetchGenreTv = exports.FETCH_TV_TRAILERS = exports.FETCH_TV_DETAILS = exports.FETCH_TV_CREDITS = exports.FETCH_THISWEEK_TV = exports.FETCH_AIRINGTODAY_TV = exports.FETCH_TOPRATED_TV = exports.FETCH_LATEST_TV = exports.FETCH_POPULAR_TV = exports.FETCH_GENRE_TV = undefined;

var _axios = __webpack_require__(76);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_GENRE_TV = exports.FETCH_GENRE_TV = "fetch_genre_tv";
var FETCH_POPULAR_TV = exports.FETCH_POPULAR_TV = "fetch_popular_tv";
var FETCH_LATEST_TV = exports.FETCH_LATEST_TV = "fetch_upcoming_tv";
var FETCH_TOPRATED_TV = exports.FETCH_TOPRATED_TV = "fetch_toprated_tv";
var FETCH_AIRINGTODAY_TV = exports.FETCH_AIRINGTODAY_TV = "fetch_airingtoday_tv";
var FETCH_THISWEEK_TV = exports.FETCH_THISWEEK_TV = "fetch_thisweek_tv";
var FETCH_TV_CREDITS = exports.FETCH_TV_CREDITS = "fetch_credits_tv";
var FETCH_TV_DETAILS = exports.FETCH_TV_DETAILS = "fetch_details_tv";
var FETCH_TV_TRAILERS = exports.FETCH_TV_TRAILERS = "fetch_trailers_tv";

var fetchGenreTv = exports.fetchGenreTv = function fetchGenreTv() {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/genre/tv/list?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_GENRE_TV,
        payload: res.data
      });
    });
  };
};

var fetchPopularTv = exports.fetchPopularTv = function fetchPopularTv() {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/popular?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_POPULAR_TV,
        payload: res.data
      });
    });
  };
};

var fetchLatestTv = exports.fetchLatestTv = function fetchLatestTv() {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/latest?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_LATEST_TV,
        payload: res.data
      });
    });
  };
};
var fetchTopRatedTv = exports.fetchTopRatedTv = function fetchTopRatedTv() {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/top_rated?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_TOPRATED_TV,
        payload: res.data
      });
    });
  };
};

var fetchAiringToday = exports.fetchAiringToday = function fetchAiringToday() {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/airing_today?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_AIRINGTODAY_TV,
        payload: res.data
      });
    });
  };
};

var fetchTvThisWeek = exports.fetchTvThisWeek = function fetchTvThisWeek() {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/on_the_air?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_THISWEEK_TV,
        payload: res.data
      });
    });
  };
};

var fetchTvDetails = exports.fetchTvDetails = function fetchTvDetails(id) {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/" + id + "?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_TV_DETAILS,
        payload: res.data
      });
    });
    dispatch(fetchTvCredits(id));
    dispatch(fetchTvTrailers(id));
  };
};

var fetchTvCredits = exports.fetchTvCredits = function fetchTvCredits(id) {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/" + id + "/credits?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_TV_CREDITS,
        payload: res.data
      });
    });
  };
};

var fetchTvTrailers = exports.fetchTvTrailers = function fetchTvTrailers(id) {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/" + id + "/videos?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_TV_TRAILERS,
        payload: res.data
      });
    });
  };
};

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchMovieTrailers = exports.fetchMovieCredits = exports.fetchMovieDetails = exports.fetchNowPlayingMovies = exports.fetchTopRatedMovies = exports.fetchUpcomingMovies = exports.fetchPopularMovies = exports.fetchGenreMovie = exports.FETCH_MOVIE_TRAILERS = exports.FETCH_MOVIE_CREDITS = exports.FETCH_MOVIE_DETAILS = exports.FETCH_TOPRATED_MOVIES = exports.FETCH_NOWPLAYING_MOVIES = exports.FETCH_UPCOMING_MOVIES = exports.FETCH_POPULAR_MOVIES = exports.FETCH_GENRE_MOVIES = undefined;

var _axios = __webpack_require__(76);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_GENRE_MOVIES = exports.FETCH_GENRE_MOVIES = 'fetch_genre_movies';
var FETCH_POPULAR_MOVIES = exports.FETCH_POPULAR_MOVIES = 'fetch_popular_movies';
var FETCH_UPCOMING_MOVIES = exports.FETCH_UPCOMING_MOVIES = 'fetch_upcoming_movies';
var FETCH_NOWPLAYING_MOVIES = exports.FETCH_NOWPLAYING_MOVIES = 'fetch_nowplaying_movies';
var FETCH_TOPRATED_MOVIES = exports.FETCH_TOPRATED_MOVIES = 'fetch_toprated_movies';
var FETCH_MOVIE_DETAILS = exports.FETCH_MOVIE_DETAILS = 'fetch_movie_details';
var FETCH_MOVIE_CREDITS = exports.FETCH_MOVIE_CREDITS = 'fetch_movie_credits';
var FETCH_MOVIE_TRAILERS = exports.FETCH_MOVIE_TRAILERS = 'fetch_movie_trailers';

var fetchGenreMovie = exports.fetchGenreMovie = function fetchGenreMovie() {
	return function (dispatch) {
		_axios2.default.get('https://api.themoviedb.org/3/genre/movie/list?' + _config.API_KEY).then(function (res) {
			return dispatch({
				type: FETCH_GENRE_MOVIES,
				payload: res.data
			});
		});
	};
};

var fetchPopularMovies = exports.fetchPopularMovies = function fetchPopularMovies(page) {
	return function (dispatch) {
		_axios2.default.get('https://api.themoviedb.org/3/movie/popular?' + _config.API_KEY + '&language=en-US&page=' + page).then(function (res) {
			return dispatch({
				type: FETCH_POPULAR_MOVIES,
				payload: res.data
			});
		});
	};
};

var fetchUpcomingMovies = exports.fetchUpcomingMovies = function fetchUpcomingMovies() {
	return function (dispatch) {
		_axios2.default.get('https://api.themoviedb.org/3/movie/upcoming?' + _config.API_KEY).then(function (res) {
			return dispatch({
				type: FETCH_UPCOMING_MOVIES,
				payload: res.data
			});
		});
	};
};
var fetchTopRatedMovies = exports.fetchTopRatedMovies = function fetchTopRatedMovies() {
	return function (dispatch) {
		_axios2.default.get('https://api.themoviedb.org/3/movie/top_rated?' + _config.API_KEY).then(function (res) {
			return dispatch({
				type: FETCH_TOPRATED_MOVIES,
				payload: res.data
			});
		});
	};
};

var fetchNowPlayingMovies = exports.fetchNowPlayingMovies = function fetchNowPlayingMovies() {
	return function (dispatch) {
		_axios2.default.get('https://api.themoviedb.org/3/movie/now_playing?' + _config.API_KEY).then(function (res) {
			return dispatch({
				type: FETCH_NOWPLAYING_MOVIES,
				payload: res.data
			});
		});
	};
};

var fetchMovieDetails = exports.fetchMovieDetails = function fetchMovieDetails(id) {
	return function (dispatch) {
		_axios2.default.get('https://api.themoviedb.org/3/movie/' + id + '?' + _config.API_KEY).then(function (res) {
			return dispatch({
				type: FETCH_MOVIE_DETAILS,
				payload: res.data
			});
		});
		dispatch(fetchMovieCredits(id));
		dispatch(fetchMovieTrailers(id));
	};
};

var fetchMovieCredits = exports.fetchMovieCredits = function fetchMovieCredits(id) {
	return function (dispatch) {
		console.log('clicked movie credis');
		_axios2.default.get('https://api.themoviedb.org/3/movie/' + id + '/credits?' + _config.API_KEY).then(function (res) {
			return dispatch({
				type: FETCH_MOVIE_CREDITS,
				payload: res.data
			});
		});
	};
};

var fetchMovieTrailers = exports.fetchMovieTrailers = function fetchMovieTrailers(id) {
	return function (dispatch) {
		console.log('clicked movie credis');
		_axios2.default.get('https://api.themoviedb.org/3/movie/' + id + '/videos?' + _config.API_KEY).then(function (res) {
			return dispatch({
				type: FETCH_MOVIE_TRAILERS,
				payload: res.data
			});
		});
	};
};

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(45);

var _selected = __webpack_require__(49);

var _reactRedux = __webpack_require__(35);

var _reactIdSwiper = __webpack_require__(241);

var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeMainPic = function (_Component) {
  _inherits(HomeMainPic, _Component);

  function HomeMainPic(props) {
    _classCallCheck(this, HomeMainPic);

    var _this = _possibleConstructorReturn(this, (HomeMainPic.__proto__ || Object.getPrototypeOf(HomeMainPic)).call(this, props));

    _this.filterGenre = function (id) {
      var genre = _this.props.genres.filter(function (item) {
        return item.id === id[0] || item.id == id[1];
      }).map(function (item) {
        return item.name;
      });
      return _react2.default.createElement(
        "h2",
        null,
        genre[0],
        " ",
        genre[1] ? "/" + genre[1] : ""
      );
    };

    _this.getVideos = function () {
      return _this.props.data.map(function (item) {
        return _react2.default.createElement(
          "div",
          {
            key: item.id,
            className: "swiper-slide",
            onClick: function onClick() {
              return _this.props.selectedItem(item.id);
            }
          },
          _react2.default.createElement("div", {
            className: "img",
            style: {
              backgroundImage: "linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original" + item.backdrop_path + ") ",
              backgroundSize: "cover",
              backgroundPosition: "center ",
              height: "100%",
              width: "100%"
            }
          }),
          _react2.default.createElement(
            "div",
            { className: "info" },
            _react2.default.createElement(
              "h1",
              null,
              item.title ? item.title : item.name
            ),
            _this.filterGenre(item.genre_ids)
          )
        );
      });
    };

    _this.selectedItem = function (id) {
      console.log(id);
      _this.props.fetchMovieDetails(id);
      _this.props.history.push("/moviedetails");
    };

    _this.goNext = _this.goNext.bind(_this);
    _this.goPrev = _this.goPrev.bind(_this);
    _this.swiper = null;
    return _this;
  }
  // Navigation for movies/tv


  _createClass(HomeMainPic, [{
    key: "goNext",
    value: function goNext() {
      if (this.swiper) this.swiper.slideNext();
    }
    // Navigation for movies/tv

  }, {
    key: "goPrev",
    value: function goPrev() {
      if (this.swiper) this.swiper.slidePrev();
    }

    // compares genre ids to the genre list in state and returns the name associated.


    // Renders a movie for each upcmoming movie in state.


    // Fetches Movie Details by passing in the id, then dispatching the method to retrieve the details by movie id.

  }, {
    key: "render",
    value: function render() {
      var params = {
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
        return _react2.default.createElement(
          "div",
          { className: !this.props.data ? "loading-screen" : "gone" },
          "Loading"
        );
      }

      return _react2.default.createElement(
        "section",
        { id: "home-mainpic" },
        _react2.default.createElement(
          _reactIdSwiper2.default,
          params,
          this.getVideos()
        )
      );
    }
  }]);

  return HomeMainPic;
}(_react.Component);

function mapStatetoProps(state) {
  return {
    genres: state.movies.genreMovies.genres
  };
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, {
  fetchMovieDetails: _selected.fetchMovieDetails
})(HomeMainPic);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(45);

var _movies = __webpack_require__(174);

var _tv = __webpack_require__(118);

var _selected = __webpack_require__(49);

var _search = __webpack_require__(117);

var _reactRedux = __webpack_require__(35);

var _homemainpic = __webpack_require__(175);

var _homemainpic2 = _interopRequireDefault(_homemainpic);

var _carousel = __webpack_require__(87);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.filterGenre = function (id) {
      var genre = _this.props.genres.filter(function (item) {
        return item.id === id[0] || item.id == id[1];
      }).map(function (item) {
        return item.name;
      });
      return _react2.default.createElement(
        "h2",
        null,
        genre[0],
        " / ",
        genre[1] ? genre[1] : ""
      );
    };

    _this.handlePopularPage = function () {
      _this.setState(function (prevState) {
        return {
          popular: prevState.popular + 1
        };
      }, function () {
        return _this.props.fetchPopularMovies(_this.state.popular);
      });
    };

    _this.selectedItem = function (id) {
      console.log(id);
      _this.props.fetchMovieDetails(id);
      _this.props.history.push("/moviedetails");
    };

    _this.handleChange = function (event) {
      _this.setState({ searchTerm: event.target.value });
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.props.fetchSearchAll(_this.state.searchTerm);
      _this.props.history.push("/searchResults");
    };

    _this.state = {
      popular: 1,
      upcoming: 1,
      movieIndex: 0,
      searchTerm: ""
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
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

    //TESTING THIS, not yet complete.....eventually I want to fetch a new page when the user swipes to the end of page 1.

  }, {
    key: "render",
    value: function render() {
      if (!this.props.upcoming) {
        return _react2.default.createElement(
          "div",
          { className: !this.props.upcoming ? "loading-screen" : "gone" },
          "Loading"
        );
      }

      return _react2.default.createElement(
        "section",
        { className: "home-page" },
        _react2.default.createElement(
          "div",
          { className: "main-image" },
          _react2.default.createElement(_homemainpic2.default, {
            selectedItem: this.selectedItem,
            data: this.props.upcoming
          }),
          _react2.default.createElement(
            "div",
            { className: "main-details" },
            _react2.default.createElement(
              "h1",
              null,
              this.props.upcoming[this.state.movieIndex].title
            ),
            this.filterGenre(this.props.upcoming[this.state.movieIndex].genre_ids),
            _react2.default.createElement(
              "h3",
              null,
              "Rating ***** "
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "video-container" },
          _react2.default.createElement(
            "div",
            { className: "section-title-header" },
            _react2.default.createElement(
              "div",
              { className: "mid-navigation" },
              _react2.default.createElement(
                "h1",
                { style: { border: "1px solid orange" } },
                "Movies"
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/tv" },
                _react2.default.createElement(
                  "h1",
                  null,
                  "TV Shows"
                )
              ),
              _react2.default.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                _react2.default.createElement("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Search your favorite Movie, TV Show, or Actor",
                  value: this.state.searchTerm,
                  onChange: this.handleChange
                }),
                _react2.default.createElement("input", { type: "submit", value: "Submit" })
              )
            )
          ),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.upcoming,
            title: "Upcoming "
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.popular,
            title: "Popular "
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.nowplaying,
            title: "Now Playing "
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.toprated,
            title: "Top Rated "
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "section-title-header" },
          _react2.default.createElement(
            "h1",
            null,
            "TV Shows"
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

function mapStatetoProps(state) {
  return {
    upcoming: state.movies.upComingMovies.results,
    popular: state.movies.popularMovies.results,
    toprated: state.movies.topRatedMovies.results,
    nowplaying: state.movies.nowPlayingMovies.results,
    genres: state.movies.genreMovies.genres
  };
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, {
  fetchUpcomingMovies: _movies.fetchUpcomingMovies,
  fetchPopularMovies: _movies.fetchPopularMovies,
  fetchNowPlayingMovies: _movies.fetchNowPlayingMovies,
  fetchTopRatedMovies: _movies.fetchTopRatedMovies,
  fetchGenreMovie: _movies.fetchGenreMovie,
  fetchMovieDetails: _selected.fetchMovieDetails,
  fetchSearchAll: _search.fetchSearchAll,
  fetchPopularTv: _tv.fetchPopularTv,
  fetchTopRatedTv: _tv.fetchTopRatedTv,
  fetchAiringToday: _tv.fetchAiringToday,
  fetchTvThisWeek: _tv.fetchTvThisWeek,
  fetchGenreTv: _tv.fetchGenreTv
})(HomePage);

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _selected = __webpack_require__(49);

var _reactRedux = __webpack_require__(35);

var _reactRouterDom = __webpack_require__(45);

var _carousel = __webpack_require__(87);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieDetails = function (_Component) {
  _inherits(MovieDetails, _Component);

  function MovieDetails() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MovieDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MovieDetails.__proto__ || Object.getPrototypeOf(MovieDetails)).call.apply(_ref, [this].concat(args))), _this), _this.selectedItem = function (id) {
      _this.props.fetchMovieDetails(id);
      _this.props.history.push("/moviedetails");
    }, _this.renderCast = function () {
      if (!_this.props.movie.cast) {
        return "loading";
      } else {
        return _this.props.movie.cast.map(function (person, i) {
          while (i < 5) {
            return _react2.default.createElement(
              "div",
              { className: "member", key: i },
              _react2.default.createElement("img", {
                src: "https://image.tmdb.org/t/p/w500/" + person.profile_path
              }),
              _react2.default.createElement(
                "h3",
                null,
                person.name
              )
            );
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MovieDetails, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props === undefined) {
        return _react2.default.createElement(
          "h1",
          null,
          "loading"
        );
      }

      return _react2.default.createElement(
        "section",
        { id: "movie-details" },
        _react2.default.createElement(
          "div",
          {
            className: "movie-container",
            style: {
              backgroundImage: "linear-gradient(0deg, rgb(2,2,2) 35%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original" + this.props.movie.backdrop_path + ")",
              backgroundSize: "cover",
              backgroundPosition: "center center no-repeat"
            }
          },
          _react2.default.createElement(
            "div",
            { className: "movie-container" },
            _react2.default.createElement(
              "div",
              { className: "youtube-section" },
              this.props.movie.results ? _react2.default.createElement("iframe", {
                src: "http://www.youtube.com/embed/" + (this.props.movie.results ? this.props.movie.results[0].key : ""),
                allowFullScreen: "allowFullScreen",
                frameBorder: "0"
              }) : _react2.default.createElement(
                "h2",
                null,
                "Cant find clip :("
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "movie-info" },
              _react2.default.createElement(
                "h1",
                null,
                this.props.movie.title
              ),
              _react2.default.createElement(
                "div",
                { className: "details" },
                _react2.default.createElement(
                  "div",
                  { className: "rating" },
                  _react2.default.createElement(
                    "h2",
                    null,
                    "Rating ",
                    this.props.movie.vote_average
                  ),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 0 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 1 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 2 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 3 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 4 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 5 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 6 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 7 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 8 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 9 ? "checked" : "") + " "
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "runtime" },
                  _react2.default.createElement(
                    "h2",
                    null,
                    this.props.movie.genres ? this.props.movie.genres[0].name : ""
                  ),
                  _react2.default.createElement(
                    "h2",
                    null,
                    this.props.movie.runtime ? this.props.movie.runtime : "",
                    "min"
                  ),
                  _react2.default.createElement(
                    "h2",
                    null,
                    this.props.movie.release_date
                  )
                )
              ),
              _react2.default.createElement(
                "p",
                null,
                this.props.movie.overview
              ),
              _react2.default.createElement(
                "div",
                { className: "cast" },
                this.renderCast()
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "video-container" },
          _react2.default.createElement(
            "div",
            { className: "section-title-header" },
            _react2.default.createElement(
              "div",
              { className: "mid-navigation" },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/" },
                _react2.default.createElement(
                  "h1",
                  { style: { border: "1px solid orange" } },
                  "Movies"
                )
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/tv" },
                _react2.default.createElement(
                  "h1",
                  null,
                  "TV Shows"
                )
              )
            )
          ),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.upcoming,
            title: "Upcoming "
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.popular,
            title: "Popular "
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.nowplaying,
            title: "Now Playing "
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.toprated,
            title: "Top Rated "
          })
        )
      );
    }
  }]);

  return MovieDetails;
}(_react.Component);

function mapStatetoProps(state) {
  return {
    movie: state.selectedItem,
    upcoming: state.movies.upComingMovies.results,
    popular: state.movies.popularMovies.results,
    toprated: state.movies.topRatedMovies.results,
    nowplaying: state.movies.nowPlayingMovies.results,
    genres: state.movies.genreMovies.genres
  };
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, { fetchMovieDetails: _selected.fetchMovieDetails })(MovieDetails);

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _selected = __webpack_require__(49);

var _reactRedux = __webpack_require__(35);

var _reactRouterDom = __webpack_require__(45);

var _carousel = __webpack_require__(87);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TvDetails = function (_Component) {
  _inherits(TvDetails, _Component);

  function TvDetails() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TvDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TvDetails.__proto__ || Object.getPrototypeOf(TvDetails)).call.apply(_ref, [this].concat(args))), _this), _this.selectedItem = function (id) {
      _this.props.fetchTvDetails(id);
      _this.props.history.push("/tvdetails");
    }, _this.renderCast = function () {
      if (!_this.props.movie.cast) {
        return "loading";
      } else {
        return _this.props.movie.cast.map(function (person, i) {
          while (i < 5) {
            return _react2.default.createElement(
              "div",
              { className: "member", key: i },
              _react2.default.createElement("img", {
                src: "https://image.tmdb.org/t/p/w500/" + person.profile_path
              }),
              _react2.default.createElement(
                "h3",
                null,
                person.name
              )
            );
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TvDetails, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props === undefined) {
        return _react2.default.createElement(
          "h1",
          null,
          "loading"
        );
      }

      return _react2.default.createElement(
        "section",
        { id: "movie-details" },
        _react2.default.createElement(
          "div",
          {
            className: "movie-container",
            style: {
              backgroundImage: "linear-gradient(0deg, rgb(2,2,2) 35%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original" + this.props.movie.backdrop_path + ")",
              backgroundSize: "cover",
              backgroundPosition: "center center no-repeat"
            }
          },
          _react2.default.createElement(
            "div",
            { className: "movie-container" },
            _react2.default.createElement(
              "div",
              { className: "youtube-section" },
              this.props.movie.results ? _react2.default.createElement("iframe", {
                src: "http://www.youtube.com/embed/" + (this.props.movie.results ? this.props.movie.results[0].key : ""),
                allowFullScreen: "allowFullScreen",
                frameBorder: "0"
              }) : _react2.default.createElement(
                "h2",
                null,
                "Cant find clip :("
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "movie-info" },
              _react2.default.createElement(
                "h1",
                null,
                this.props.movie.title
              ),
              _react2.default.createElement(
                "div",
                { className: "details" },
                _react2.default.createElement(
                  "div",
                  { className: "rating" },
                  _react2.default.createElement(
                    "h2",
                    null,
                    "Rating ",
                    this.props.movie.vote_average
                  ),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 0 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 1 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 2 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 3 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 4 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 5 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 6 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 7 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 8 ? "checked" : "") + " "
                  }),
                  _react2.default.createElement("span", {
                    className: "fa fa-star " + (this.props.movie.vote_average > 9 ? "checked" : "") + " "
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "runtime" },
                  _react2.default.createElement(
                    "h2",
                    null,
                    this.props.movie.genres ? this.props.movie.genres[0].name : ""
                  ),
                  _react2.default.createElement(
                    "h2",
                    null,
                    this.props.movie.runtime ? this.props.movie.runtime : "",
                    "min"
                  ),
                  _react2.default.createElement(
                    "h2",
                    null,
                    this.props.movie.release_date
                  )
                )
              ),
              _react2.default.createElement(
                "p",
                null,
                this.props.movie.overview
              ),
              _react2.default.createElement(
                "div",
                { className: "cast" },
                this.renderCast()
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "video-container" },
          _react2.default.createElement(
            "div",
            { className: "section-title-header" },
            _react2.default.createElement(
              "div",
              { className: "mid-navigation" },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/" },
                _react2.default.createElement(
                  "h1",
                  { style: { border: "1px solid orange" } },
                  "Movies"
                )
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/tv" },
                _react2.default.createElement(
                  "h1",
                  null,
                  "TV Shows"
                )
              )
            )
          ),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.popular,
            title: "popular"
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.toprated,
            title: "top rated"
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.airingtoday,
            title: "airing today"
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.thisweek,
            title: "airing this week "
          })
        )
      );
    }
  }]);

  return TvDetails;
}(_react.Component);

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
exports.default = (0, _reactRedux.connect)(mapStatetoProps, { fetchTvDetails: _selected.fetchTvDetails })(TvDetails);

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(45);

var _tv = __webpack_require__(118);

var _selected = __webpack_require__(49);

var _reactRedux = __webpack_require__(35);

var _homemainpic = __webpack_require__(175);

var _homemainpic2 = _interopRequireDefault(_homemainpic);

var _carousel = __webpack_require__(87);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TvPage = function (_Component) {
  _inherits(TvPage, _Component);

  function TvPage(props) {
    _classCallCheck(this, TvPage);

    var _this = _possibleConstructorReturn(this, (TvPage.__proto__ || Object.getPrototypeOf(TvPage)).call(this, props));

    _this.filterGenre = function (id) {
      if (!_this.props.genres) {
        return _react2.default.createElement(
          "h2",
          null,
          "' '"
        );
      }
      var genre = _this.props.genres.filter(function (item) {
        return item.id === id[0] || item.id == id[1];
      }).map(function (item) {
        return item.name;
      });
      return _react2.default.createElement(
        "h2",
        null,
        genre[0],
        " / ",
        genre[1] ? genre[1] : ""
      );
    };

    _this.selectedItem = function (id) {
      console.log(id);
      _this.props.fetchTvDetails(id);
      _this.props.history.push("/tvdetails");
    };

    _this.state = {
      popular: 1,
      upcoming: 1,
      movieIndex: 0
    };
    return _this;
  }

  _createClass(TvPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.fetchPopularTv();
      this.props.fetchTopRatedTv();
      this.props.fetchAiringToday();
      this.props.fetchTvThisWeek();
      this.props.fetchGenreTv();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.popular) {
        return _react2.default.createElement(
          "div",
          { className: !this.props.popular ? "loading-screen" : "gone" },
          "Loading"
        );
      }

      return _react2.default.createElement(
        "section",
        { className: "home-page" },
        _react2.default.createElement(
          "div",
          { className: "main-image" },
          _react2.default.createElement(_homemainpic2.default, {
            selectedItem: this.selectedItem,
            data: this.props.popular
          }),
          _react2.default.createElement(
            "div",
            { className: "main-details" },
            _react2.default.createElement(
              "h1",
              null,
              this.props.popular[this.state.movieIndex].name
            ),
            this.filterGenre(this.props.popular[this.state.movieIndex].genre_ids),
            _react2.default.createElement(
              "h3",
              null,
              "Rating ***** "
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "video-container" },
          _react2.default.createElement(
            "div",
            { className: "section-title-header" },
            _react2.default.createElement(
              "div",
              { className: "mid-navigation" },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/" },
                _react2.default.createElement(
                  "h1",
                  null,
                  "Movies"
                )
              ),
              _react2.default.createElement(
                "h1",
                { style: { border: "1px solid orange" } },
                "TV Shows"
              )
            )
          ),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.popular,
            title: "popular"
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.toprated,
            title: "top rated"
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.airingtoday,
            title: "airing today"
          }),
          _react2.default.createElement(_carousel2.default, {
            selectedItem: this.selectedItem,
            movie: this.props.thisweek,
            title: "airing this week "
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "section-title-header" },
          _react2.default.createElement(
            "h1",
            null,
            "TV Shows"
          )
        )
      );
    }
  }]);

  return TvPage;
}(_react.Component);

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
exports.default = (0, _reactRedux.connect)(mapStatetoProps, {
  fetchPopularTv: _tv.fetchPopularTv,
  fetchTopRatedTv: _tv.fetchTopRatedTv,
  fetchAiringToday: _tv.fetchAiringToday,
  fetchTvThisWeek: _tv.fetchTvThisWeek,
  fetchGenreTv: _tv.fetchGenreTv,
  fetchTvDetails: _selected.fetchTvDetails
})(TvPage);

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _search = __webpack_require__(117);

var _selected = __webpack_require__(49);

var _reactRedux = __webpack_require__(35);

var _reactRouterDom = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResults = function (_Component) {
  _inherits(SearchResults, _Component);

  function SearchResults() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchResults);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).call.apply(_ref, [this].concat(args))), _this), _this.selectedItem = function (item) {
      var id = item.id;
      var type = item.media_type;
      _this.props.fetchSearchDetails(id, type);
      if (type == "tv") {
        _this.props.history.push("/Tvdetails");
      }
      if (type == "movie") {
        _this.props.history.push("/Moviedetails");
      }
    }, _this.showResults = function () {
      if (!_this.props.searchResults.results) {
        _react2.default.createElement(
          "div",
          { className: "loading-screen" },
          "Loading..."
        );
      } else if (_this.props.searchResults.results) {
        return _this.props.searchResults.results.map(function (item, i) {
          return _react2.default.createElement(
            "div",
            {
              className: "search-item",
              key: i,
              onClick: function onClick() {
                return _this.selectedItem(item);
              }
            },
            _react2.default.createElement("img", {
              src: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "/img/notfoundImage.jpg"
            }),
            _react2.default.createElement(
              "h2",
              null,
              item.title ? item.title : item.name
            )
          );
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchResults, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.searchResults === undefined) {
        return _react2.default.createElement(
          "h1",
          null,
          "loading"
        );
      }

      return _react2.default.createElement(
        "section",
        { id: "search-results" },
        _react2.default.createElement(
          "div",
          { className: "search-container" },
          this.showResults()
        )
      );
    }
  }]);

  return SearchResults;
}(_react.Component);

function mapStatetoProps(state) {
  return {
    searchResults: state.searchResults
  };
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, { fetchSearchAll: _search.fetchSearchAll, fetchSearchDetails: _selected.fetchSearchDetails })(SearchResults);

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(77);

var _movieReducer = __webpack_require__(288);

var _movieReducer2 = _interopRequireDefault(_movieReducer);

var _tvReducer = __webpack_require__(291);

var _tvReducer2 = _interopRequireDefault(_tvReducer);

var _selectedItemReducer = __webpack_require__(290);

var _selectedItemReducer2 = _interopRequireDefault(_selectedItemReducer);

var _searchReducer = __webpack_require__(289);

var _searchReducer2 = _interopRequireDefault(_searchReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  movies: _movieReducer2.default,
  tv: _tvReducer2.default,
  selectedItem: _selectedItemReducer2.default,
  searchResults: _searchReducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Movie = function Movie(_ref) {
	var id = _ref.id,
	    img = _ref.img,
	    title = _ref.title,
	    genre = _ref.genre,
	    selectedItem = _ref.selectedItem;

	return _react2.default.createElement(
		"div",
		{ className: "swiper-slide", onClick: function onClick() {
				return selectedItem(id);
			} },
		_react2.default.createElement(
			"div",
			{ className: "img" },
			_react2.default.createElement("img", { src: "https://image.tmdb.org/t/p/w500" + img })
		),
		_react2.default.createElement(
			"div",
			{ className: "info" },
			_react2.default.createElement(
				"h1",
				null,
				title
			),
			genre
		)
	);
};

exports.default = Movie;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(35);

var _redux = __webpack_require__(77);

var _reduxThunk = __webpack_require__(267);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterDom = __webpack_require__(45);

var _reducers = __webpack_require__(265);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(76);

var _axios2 = _interopRequireDefault(_axios);

var _HomePage = __webpack_require__(260);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _TvPage = __webpack_require__(263);

var _TvPage2 = _interopRequireDefault(_TvPage);

var _Nav = __webpack_require__(259);

var _Nav2 = _interopRequireDefault(_Nav);

var _MovieDetails = __webpack_require__(261);

var _MovieDetails2 = _interopRequireDefault(_MovieDetails);

var _TvDetails = __webpack_require__(262);

var _TvDetails2 = _interopRequireDefault(_TvDetails);

var _searchresults = __webpack_require__(264);

var _searchresults2 = _interopRequireDefault(_searchresults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};
var middleware = [_reduxThunk2.default];

var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      "div",
      { id: "home" },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: "/tvdetails", component: _TvDetails2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/moviedetails", component: _MovieDetails2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: "/tv", component: _TvPage2.default })
      ),
      _react2.default.createElement(_reactRouterDom.Route, { path: "/searchResults", component: _searchresults2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _HomePage2.default })
    )
  )
), document.getElementById("app"));

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _movies.FETCH_UPCOMING_MOVIES:
			return _extends({}, state, {
				upComingMovies: action.payload
			});
		case _movies.FETCH_POPULAR_MOVIES:
			return _extends({}, state, {
				popularMovies: action.payload
			});
		case _movies.FETCH_NOWPLAYING_MOVIES:
			return _extends({}, state, {
				nowPlayingMovies: action.payload
			});
		case _movies.FETCH_TOPRATED_MOVIES:
			return _extends({}, state, {
				topRatedMovies: action.payload
			});
		case _movies.FETCH_GENRE_MOVIES:
			return _extends({}, state, {
				genreMovies: action.payload
			});
		case _movies.FETCH_MOVIE_DETAILS:
			return _extends({}, state, {
				selectedMovie: _extends({}, state.selectedMovie, action.payload)
			});
		case _movies.FETCH_MOVIE_CREDITS:
			return _extends({}, state, {
				selectedMovie: _extends({}, state.selectedMovie, action.payload)
			});
		case _movies.FETCH_MOVIE_TRAILERS:
			return _extends({}, state, {
				selectedMovie: _extends({}, state.selectedMovie, action.payload)
			});
		default:
			return state;
	}
};

var _movies = __webpack_require__(174);

var initialState = {
	selectedMovie: {},
	popularMovies: [],
	upComingMovies: [],
	nowPlayingMovies: [],
	topRatedMovies: [],
	genreMovies: []
};

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _search.FETCH_SEARCH_ALL:
      return action.payload;
    default:
      return state;
  }
};

var _search = __webpack_require__(117);

var initialState = {
  searchResults: {}
};

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _selected.FETCH_SELECTED_DETAILS:
      return _extends({}, state, action.payload);

    case _selected.FETCH_TV_CREDITS:
      return _extends({}, state, action.payload);
    case _selected.FETCH_TV_TRAILERS:
      return _extends({}, state, action.payload);

    case _selected.FETCH_MOVIE_CREDITS:
      return _extends({}, state, action.payload);

    case _selected.FETCH_MOVIE_TRAILERS:
      return _extends({}, state, action.payload);

    default:
      return state;
  }
};

var _selected = __webpack_require__(49);

var initialState = {
  selectedItem: {}
};

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _tv.FETCH_GENRE_TV:
      return _extends({}, state, {
        genreTv: action.payload
      });
    case _tv.FETCH_POPULAR_TV:
      return _extends({}, state, {
        popularTv: action.payload
      });
    case _tv.FETCH_TOPRATED_TV:
      return _extends({}, state, {
        topRatedTv: action.payload
      });
    case _tv.FETCH_AIRINGTODAY_TV:
      return _extends({}, state, {
        airingTodayTv: action.payload
      });
    case _tv.FETCH_THISWEEK_TV:
      return _extends({}, state, {
        airingThisWeekTv: action.payload
      });
    case _tv.FETCH_TV_DETAILS:
      return _extends({}, state, {
        selectedTv: _extends({}, state.selectedTv, action.payload)
      });

    case _tv.FETCH_TV_CREDITS:
      return _extends({}, state, {
        selectedTv: _extends({}, state.selectedTv, action.payload)
      });
    case _tv.FETCH_TV_TRAILERS:
      return _extends({}, state, {
        selectedTv: _extends({}, state.selectedTv, action.payload)
      });

    default:
      return state;
  }
};

var _tv = __webpack_require__(118);

var initialState = {
  selectedTv: {},
  popularTv: [],
  topRatedTv: [],
  airingTodayTv: [],
  airingThisWeekTv: [],
  genreTv: []
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMovieTrailers = exports.fetchMovieCredits = exports.fetchTvTrailers = exports.fetchTvCredits = exports.fetchMovieDetails = exports.fetchTvDetails = exports.fetchSearchDetails = exports.FETCH_MOVIE_TRAILERS = exports.FETCH_MOVIE_CREDITS = exports.FETCH_TV_TRAILERS = exports.FETCH_TV_CREDITS = exports.FETCH_SELECTED_DETAILS = undefined;

var _axios = __webpack_require__(76);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_SELECTED_DETAILS = exports.FETCH_SELECTED_DETAILS = "fetch_selected_details";

var FETCH_TV_CREDITS = exports.FETCH_TV_CREDITS = "fetch_credits_tv";
var FETCH_TV_TRAILERS = exports.FETCH_TV_TRAILERS = "fetch_trailers_tv";

var FETCH_MOVIE_CREDITS = exports.FETCH_MOVIE_CREDITS = "fetch_credits_movies";
var FETCH_MOVIE_TRAILERS = exports.FETCH_MOVIE_TRAILERS = "fetch_trailers_movies";

var fetchSearchDetails = exports.fetchSearchDetails = function fetchSearchDetails(id, type) {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/" + type + "/" + id + "?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_SELECTED_DETAILS,
        payload: res.data
      });
    });
    if (type == "tv") {
      dispatch(fetchTvCredits(id));
      dispatch(fetchTvTrailers(id));
    } else {
      dispatch(fetchMovieCredits(id));
      dispatch(fetchMovieTrailers(id));
    }
  };
};

var fetchTvDetails = exports.fetchTvDetails = function fetchTvDetails(id) {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/" + id + "?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_SELECTED_DETAILS,
        payload: res.data
      });
    });
    dispatch(fetchTvCredits(id));
    dispatch(fetchTvTrailers(id));
  };
};

var fetchMovieDetails = exports.fetchMovieDetails = function fetchMovieDetails(id) {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/movie/" + id + "?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_SELECTED_DETAILS,
        payload: res.data
      });
    });
    dispatch(fetchMovieCredits(id));
    dispatch(fetchMovieTrailers(id));
  };
};

var fetchTvCredits = exports.fetchTvCredits = function fetchTvCredits(id) {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/" + id + "/credits?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_TV_CREDITS,
        payload: res.data
      });
    });
  };
};

var fetchTvTrailers = exports.fetchTvTrailers = function fetchTvTrailers(id) {
  return function (dispatch) {
    _axios2.default.get("https://api.themoviedb.org/3/tv/" + id + "/videos?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_TV_TRAILERS,
        payload: res.data
      });
    });
  };
};

var fetchMovieCredits = exports.fetchMovieCredits = function fetchMovieCredits(id) {
  return function (dispatch) {
    console.log("clicked movie credis");
    _axios2.default.get("https://api.themoviedb.org/3/movie/" + id + "/credits?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_MOVIE_CREDITS,
        payload: res.data
      });
    });
  };
};

var fetchMovieTrailers = exports.fetchMovieTrailers = function fetchMovieTrailers(id) {
  return function (dispatch) {
    console.log("clicked movie credis");
    _axios2.default.get("https://api.themoviedb.org/3/movie/" + id + "/videos?" + _config.API_KEY).then(function (res) {
      return dispatch({
        type: FETCH_MOVIE_TRAILERS,
        payload: res.data
      });
    });
  };
};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_KEY = exports.API_KEY = 'api_key=198b9ddcfd3755ac7a132d98b8f8fda2';

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(45);

var _selected = __webpack_require__(49);

var _reactRedux = __webpack_require__(35);

var _reactIdSwiper = __webpack_require__(241);

var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);

var _movie = __webpack_require__(286);

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.filterGenre = function (id) {
      var genre = _this.props.genres.filter(function (item) {
        return item.id === id[0] || item.id == id[1];
      }).map(function (item) {
        return item.name;
      });
      return _react2.default.createElement(
        "h2",
        null,
        genre[0],
        " ",
        genre[1] ? "/" + genre[1] : ""
      );
    };

    _this.renderVideos = function () {
      console.log(_this.props.movie);
      return _this.props.movie.map(function (movie) {
        return _react2.default.createElement(_movie2.default, {
          key: movie.id,
          id: movie.id,
          img: movie.poster_path,
          title: movie.title ? movie.title : movie.name,
          genre: _this.filterGenre(movie.genre_ids),
          selectedItem: _this.props.selectedItem
        });
      });
    };

    _this.selectedItem = function (id) {
      _this.props.fetchMovieDetails(id);
    };

    _this.goNext = _this.goNext.bind(_this);
    _this.goPrev = _this.goPrev.bind(_this);
    _this.swiper = null;
    return _this;
  }

  // Navigation for movies/tv


  _createClass(Carousel, [{
    key: "goNext",
    value: function goNext() {
      if (this.swiper) this.swiper.slideNext();
    }
    // Navigation for movies/tv

  }, {
    key: "goPrev",
    value: function goPrev() {
      if (this.swiper) this.swiper.slidePrev();
    }

    // compares genre ids to the genre list in state and returns the name associated.


    // Renders a movie for each upcmoming movie in state.


    // Fetches Movie Details by passing in the id, then dispatching the method to retrieve the details by movie id.

  }, {
    key: "render",
    value: function render() {
      var params = {
        setWrapperSize: true,
        init: true,
        slidesPerView: 7,
        loop: true,
        spaceBetween: 15,
        observer: true,
        direction: "horizontal",
        pagination: {
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1145: { slidesPerView: 5 },
          699: { slidesPerView: 3 }
        }
      };

      if (!this.props.movie) {
        return _react2.default.createElement(
          "div",
          { className: !this.props.movie ? "loading-screen" : "gone" },
          "Loading"
        );
      }

      return _react2.default.createElement(
        "section",
        { className: "movie-selections" },
        _react2.default.createElement(
          "div",
          { className: "title-sub-header" },
          _react2.default.createElement(
            "h2",
            null,
            this.props.title
          )
        ),
        _react2.default.createElement(
          _reactIdSwiper2.default,
          params,
          this.renderVideos()
        )
      );
    }
  }]);

  return Carousel;
}(_react.Component);

function mapStatetoProps(state) {
  return {
    genres: state.movies.genreMovies.genres
  };
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, {
  fetchMovieDetails: _selected.fetchMovieDetails
})(Carousel);

/***/ })

},[287]);