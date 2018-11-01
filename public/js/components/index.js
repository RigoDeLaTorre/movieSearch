webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(65);

var _movies = __webpack_require__(66);

var _reactRedux = __webpack_require__(47);

var _reactIdSwiper = __webpack_require__(160);

var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);

var _movie = __webpack_require__(174);

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopularMovies = function (_Component) {
	_inherits(PopularMovies, _Component);

	function PopularMovies(props) {
		_classCallCheck(this, PopularMovies);

		var _this = _possibleConstructorReturn(this, (PopularMovies.__proto__ || Object.getPrototypeOf(PopularMovies)).call(this, props));

		_this.filterGenre = function (id) {
			var genre = _this.props.genres.filter(function (item) {
				return item.id === id[0] || item.id == id[1];
			}).map(function (item) {
				return item.name;
			});
			return _react2.default.createElement(
				'h2',
				null,
				genre[0],
				' ',
				genre[1] ? '/' + genre[1] : ''
			);
		};

		_this.popularMovie = function () {
			return _this.props.popular.map(function (movie) {
				return _react2.default.createElement(_movie2.default, {
					key: movie.id,
					id: movie.id,
					img: movie.poster_path,
					title: movie.title,
					genre: _this.filterGenre(movie.genre_ids),
					selectedItem: _this.selectedItem
				});
			});
		};

		_this.selectedItem = function (id) {
			console.log(id);
			_this.props.fetchMovieDetails(id);
			console.log(_this.props);
		};

		_this.goNext = _this.goNext.bind(_this);
		_this.goPrev = _this.goPrev.bind(_this);
		_this.swiper = null;
		return _this;
	}

	// Navigation for movies/tv


	_createClass(PopularMovies, [{
		key: 'goNext',
		value: function goNext() {
			if (this.swiper) this.swiper.slideNext();
		}
		// Navigation for movies/tv

	}, {
		key: 'goPrev',
		value: function goPrev() {
			if (this.swiper) this.swiper.slidePrev();
		}

		// compares genre ids to the genre list in state and returns the name associated.


		// Renders a movie for each upcmoming movie in state.


		// Fetches Movie Details by passing in the id, then dispatching the method to retrieve the details by movie id.

	}, {
		key: 'render',
		value: function render() {
			var params = {
				setWrapperSize: true,
				init: true,
				slidesPerView: 7,
				loop: true,
				spaceBetween: 15,
				observer: true,
				direction: 'horizontal',
				pagination: {
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					1145: { slidesPerView: 5 },
					699: { slidesPerView: 3 }
				}
			};

			if (!this.props.popular) {
				return _react2.default.createElement(
					'div',
					{ className: !this.props.popular ? 'loading-screen' : 'gone' },
					'Loading poplar movies'
				);
			}

			return _react2.default.createElement(
				'section',
				{ className: 'movie-selections' },
				_react2.default.createElement(
					'div',
					{ className: 'title-sub-header' },
					_react2.default.createElement(
						'h2',
						null,
						'Popular Movies'
					)
				),
				_react2.default.createElement(
					_reactIdSwiper2.default,
					params,
					this.popularMovie()
				)
			);
		}
	}]);

	return PopularMovies;
}(_react.Component);

function mapStatetoProps(state) {
	return {
		popular: state.movies.popularMovies.results,
		genres: state.movies.genreMovies.genres
	};
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, {
	fetchMovieDetails: _movies.fetchMovieDetails
})(PopularMovies);

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(65);

var _movies = __webpack_require__(66);

var _reactRedux = __webpack_require__(47);

var _reactIdSwiper = __webpack_require__(160);

var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);

var _movie = __webpack_require__(174);

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpcomingMovies = function (_Component) {
	_inherits(UpcomingMovies, _Component);

	function UpcomingMovies(props) {
		_classCallCheck(this, UpcomingMovies);

		var _this = _possibleConstructorReturn(this, (UpcomingMovies.__proto__ || Object.getPrototypeOf(UpcomingMovies)).call(this, props));

		_this.gotoDetails = function () {
			_this.props.history.push('/moviedetails');
		};

		_this.filterGenre = function (id) {
			var genre = _this.props.genres.filter(function (item) {
				return item.id === id[0] || item.id == id[1];
			}).map(function (item) {
				return item.name;
			});
			return _react2.default.createElement(
				'h2',
				null,
				genre[0],
				' ',
				genre[1] ? '/' + genre[1] : ''
			);
		};

		_this.upcomingMovie = function () {
			return _this.props.upcoming.map(function (movie) {
				return _react2.default.createElement(_movie2.default, {
					key: movie.id,
					id: movie.id,
					img: movie.poster_path,
					title: movie.title,
					genre: _this.filterGenre(movie.genre_ids),
					selectedItem: _this.props.selectedItem
				});
			});
		};

		_this.selectedItem = function (id) {
			console.log(id);
			_this.props.fetchMovieDetails(id);
			_this.props.history.push('/moviedetails');
		};

		_this.goNext = _this.goNext.bind(_this);
		_this.goPrev = _this.goPrev.bind(_this);
		_this.swiper = null;
		return _this;
	}

	_createClass(UpcomingMovies, [{
		key: 'goNext',

		// Navigation for movies/tv
		value: function goNext() {
			if (this.swiper) this.swiper.slideNext();
		}
		// Navigation for movies/tv

	}, {
		key: 'goPrev',
		value: function goPrev() {
			if (this.swiper) this.swiper.slidePrev();
		}

		// compares genre ids to the genre list in state and returns the name associated.


		// Renders a movie for each upcmoming movie in state.


		// Fetches Movie Details by passing in the id, then dispatching the method to retrieve the details by movie id.

	}, {
		key: 'render',
		value: function render() {
			var params = {
				setWrapperSize: true,
				init: true,
				slidesPerView: 7,
				loop: true,
				spaceBetween: 15,
				observer: true,
				direction: 'horizontal',
				pagination: {
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				breakpoints: {
					1145: { slidesPerView: 5 },
					699: { slidesPerView: 3 }
				}
			};

			if (!this.props.upcoming) {
				return _react2.default.createElement(
					'div',
					{ className: !this.props.upcoming ? 'loading-screen' : 'gone' },
					'Loading'
				);
			}

			return _react2.default.createElement(
				'section',
				{ className: 'movie-selections' },
				_react2.default.createElement(
					'div',
					{ className: 'title-sub-header' },
					_react2.default.createElement(
						'h2',
						null,
						'Upcoming Movies'
					)
				),
				_react2.default.createElement(
					_reactIdSwiper2.default,
					params,
					this.upcomingMovie()
				)
			);
		}
	}]);

	return UpcomingMovies;
}(_react.Component);

function mapStatetoProps(state) {
	return {
		upcoming: state.movies.upComingMovies.results,
		genres: state.movies.genreMovies.genres
	};
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, {
	fetchMovieDetails: _movies.fetchMovieDetails
})(UpcomingMovies);

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(65);

var _movies = __webpack_require__(66);

var _reactRedux = __webpack_require__(47);

var _reactIdSwiper = __webpack_require__(160);

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
				'h2',
				null,
				genre[0],
				' ',
				genre[1] ? '/' + genre[1] : ''
			);
		};

		_this.upcomingMovie = function () {
			return _this.props.upcoming.map(function (movie) {
				return _react2.default.createElement(
					'div',
					{
						key: movie.id,
						className: 'swiper-slide',
						onClick: function onClick() {
							return _this.props.selectedItem(movie.id);
						} },
					_react2.default.createElement('div', {
						className: 'img',
						style: {
							backgroundImage: 'linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ') ',
							backgroundSize: 'cover',
							backgroundPosition: 'center ',
							height: '100%',
							width: '100%'
						}
					}),
					_react2.default.createElement(
						'div',
						{ className: 'info' },
						_react2.default.createElement(
							'h1',
							null,
							movie.title
						),
						_this.filterGenre(movie.genre_ids)
					)
				);
			});
		};

		_this.selectedItem = function (id) {
			console.log(id);
			_this.props.fetchMovieDetails(id);
			_this.props.history.push('/moviedetails');
		};

		_this.goNext = _this.goNext.bind(_this);
		_this.goPrev = _this.goPrev.bind(_this);
		_this.swiper = null;
		return _this;
	}

	_createClass(HomeMainPic, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.fetchGenreMovie();
			this.props.fetchUpcomingtMovies();
		}

		// Navigation for movies/tv

	}, {
		key: 'goNext',
		value: function goNext() {
			if (this.swiper) this.swiper.slideNext();
		}
		// Navigation for movies/tv

	}, {
		key: 'goPrev',
		value: function goPrev() {
			if (this.swiper) this.swiper.slidePrev();
		}

		// compares genre ids to the genre list in state and returns the name associated.


		// Renders a movie for each upcmoming movie in state.


		// Fetches Movie Details by passing in the id, then dispatching the method to retrieve the details by movie id.

	}, {
		key: 'render',
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
				direction: 'horizontal',
				pagination: {
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			};

			if (!this.props.upcoming) {
				return _react2.default.createElement(
					'div',
					{ className: !this.props.upcoming ? 'loading-screen' : 'gone' },
					'Loading'
				);
			}

			return _react2.default.createElement(
				'section',
				{ id: 'home-mainpic' },
				_react2.default.createElement(
					_reactIdSwiper2.default,
					params,
					this.upcomingMovie()
				)
			);
		}
	}]);

	return HomeMainPic;
}(_react.Component);

function mapStatetoProps(state) {
	return {
		upcoming: state.movies.upComingMovies.results,
		genres: state.movies.genreMovies.genres
	};
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, {
	fetchUpcomingtMovies: _movies.fetchUpcomingtMovies,
	fetchGenreMovie: _movies.fetchGenreMovie,
	fetchMovieDetails: _movies.fetchMovieDetails
})(HomeMainPic);

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(65);

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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(65);

var _movies = __webpack_require__(66);

var _reactRedux = __webpack_require__(47);

var _upcomingMovies = __webpack_require__(112);

var _upcomingMovies2 = _interopRequireDefault(_upcomingMovies);

var _popularMovies = __webpack_require__(111);

var _popularMovies2 = _interopRequireDefault(_popularMovies);

var _homemainpic = __webpack_require__(167);

var _homemainpic2 = _interopRequireDefault(_homemainpic);

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
				'h2',
				null,
				genre[0],
				' / ',
				genre[1] ? genre[1] : ''
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
			_this.props.history.push('/moviedetails');
		};

		_this.state = {
			popular: 2,
			upcoming: 1,
			movieIndex: 0
		};
		return _this;
	}

	_createClass(HomePage, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.fetchGenreMovie();
			this.props.fetchPopularMovies(this.state.popular);
			this.props.fetchUpcomingtMovies();
		}

		//TESTING THIS, not yet complete.....eventually I want to fetch a new page when the user swipes to the end of page 1.

	}, {
		key: 'render',
		value: function render() {
			if (!this.props.upcoming) {
				return _react2.default.createElement(
					'div',
					{ className: !this.props.upcoming ? 'loading-screen' : 'gone' },
					'Loading'
				);
			}

			return _react2.default.createElement(
				'section',
				{ className: 'home-page' },
				_react2.default.createElement(
					'div',
					{ className: 'main-image' },
					_react2.default.createElement(_homemainpic2.default, { selectedItem: this.selectedItem }),
					_react2.default.createElement(
						'div',
						{ className: 'main-details' },
						_react2.default.createElement(
							'h1',
							null,
							this.props.upcoming[this.state.movieIndex].title
						),
						this.filterGenre(this.props.upcoming[this.state.movieIndex].genre_ids),
						_react2.default.createElement(
							'h3',
							null,
							'Rating ***** '
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'video-container' },
					_react2.default.createElement(
						'div',
						{ className: 'section-title-header' },
						_react2.default.createElement(
							'h1',
							null,
							'Movies'
						)
					),
					_react2.default.createElement(_upcomingMovies2.default, { selectedItem: this.selectedItem }),
					_react2.default.createElement(_popularMovies2.default, null)
				),
				_react2.default.createElement(
					'div',
					{ className: 'section-title-header' },
					_react2.default.createElement(
						'h1',
						null,
						'TV Shows'
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
		genres: state.movies.genreMovies.genres
	};
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, {
	fetchUpcomingtMovies: _movies.fetchUpcomingtMovies,
	fetchPopularMovies: _movies.fetchPopularMovies,
	fetchGenreMovie: _movies.fetchGenreMovie,
	fetchMovieDetails: _movies.fetchMovieDetails
})(HomePage);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _movies = __webpack_require__(66);

var _reactRedux = __webpack_require__(47);

var _upcomingMovies = __webpack_require__(112);

var _upcomingMovies2 = _interopRequireDefault(_upcomingMovies);

var _popularMovies = __webpack_require__(111);

var _popularMovies2 = _interopRequireDefault(_popularMovies);

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
			console.log(id);
			_this.props.fetchMovieDetails(id);
			_this.props.history.push('/moviedetails');
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(MovieDetails, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			window.scrollTo(0, 0);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.movie === undefined) {
				return _react2.default.createElement(
					'h1',
					null,
					'loading'
				);
			}

			return _react2.default.createElement(
				'section',
				{ id: 'movie-details' },
				_react2.default.createElement(
					'div',
					{
						className: 'movie-container',
						style: {
							backgroundImage: 'linear-gradient(0deg, rgb(2,2,2) 35%, rgba(0, 0, 0, 0) 55%), url(https://image.tmdb.org/t/p/original' + this.props.movie.backdrop_path + ')',
							backgroundSize: 'cover',
							backgroundPosition: 'center center no-repeat'
						} },
					_react2.default.createElement(
						'div',
						{ className: 'movie-container' },
						_react2.default.createElement(
							'div',
							{ className: 'youtube-section' },
							_react2.default.createElement('iframe', {
								src: 'http://www.youtube.com/embed/' + (this.props.movie.results ? this.props.movie.results[0].key : ''),
								allowFullScreen: 'allowFullScreen',
								frameBorder: '0'
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'movie-info' },
							_react2.default.createElement(
								'h1',
								null,
								this.props.movie.title
							),
							_react2.default.createElement(
								'div',
								{ className: 'details' },
								_react2.default.createElement(
									'div',
									{ className: 'rating' },
									_react2.default.createElement(
										'h2',
										null,
										'Rating ',
										this.props.movie.vote_average
									),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 0 ? 'checked' : '') + ' '
									}),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 1 ? 'checked' : '') + ' '
									}),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 2 ? 'checked' : '') + ' '
									}),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 3 ? 'checked' : '') + ' '
									}),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 4 ? 'checked' : '') + ' '
									}),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 5 ? 'checked' : '') + ' '
									}),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 6 ? 'checked' : '') + ' '
									}),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 7 ? 'checked' : '') + ' '
									}),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 8 ? 'checked' : '') + ' '
									}),
									_react2.default.createElement('span', {
										className: 'fa fa-star ' + (this.props.movie.vote_average > 9 ? 'checked' : '') + ' '
									})
								),
								_react2.default.createElement(
									'div',
									{ className: 'runtime' },
									_react2.default.createElement(
										'h2',
										null,
										this.props.movie.genres ? this.props.movie.genres[0].name : ''
									),
									_react2.default.createElement(
										'h2',
										null,
										this.props.movie.runtime,
										' min'
									),
									_react2.default.createElement(
										'h2',
										null,
										this.props.movie.release_date
									)
								)
							),
							_react2.default.createElement(
								'p',
								null,
								this.props.movie.overview
							),
							_react2.default.createElement('div', { className: 'cast' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'video-container' },
					_react2.default.createElement(
						'div',
						{ className: 'section-title-header' },
						_react2.default.createElement(
							'h1',
							null,
							'Movies'
						)
					),
					_react2.default.createElement(_upcomingMovies2.default, { selectedItem: this.selectedItem }),
					_react2.default.createElement(_popularMovies2.default, null)
				)
			);
		}
	}]);

	return MovieDetails;
}(_react.Component);

function mapStatetoProps(state) {
	return {
		movie: state.movies.selectedMovie
	};
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, { fetchMovieDetails: _movies.fetchMovieDetails })(MovieDetails);

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(76);

var _movieReducer = __webpack_require__(283);

var _movieReducer2 = _interopRequireDefault(_movieReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  movies: _movieReducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_KEY = exports.API_KEY = 'api_key=198b9ddcfd3755ac7a132d98b8f8fda2';

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(43);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(47);

var _redux = __webpack_require__(76);

var _reduxThunk = __webpack_require__(262);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterDom = __webpack_require__(65);

var _reducers = __webpack_require__(260);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(166);

var _axios2 = _interopRequireDefault(_axios);

var _HomePage = __webpack_require__(258);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _Nav = __webpack_require__(257);

var _Nav2 = _interopRequireDefault(_Nav);

var _MovieDetails = __webpack_require__(259);

var _MovieDetails2 = _interopRequireDefault(_MovieDetails);

var _upcomingMovies = __webpack_require__(112);

var _upcomingMovies2 = _interopRequireDefault(_upcomingMovies);

var _popularMovies = __webpack_require__(111);

var _popularMovies2 = _interopRequireDefault(_popularMovies);

var _homemainpic = __webpack_require__(167);

var _homemainpic2 = _interopRequireDefault(_homemainpic);

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
			'div',
			{ id: 'home' },
			_react2.default.createElement(
				_reactRouterDom.Switch,
				null,
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomePage2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/moviedetails', component: _MovieDetails2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { path: '/dfgdfg', component: _HomePage2.default })
			)
		)
	)
), document.getElementById('app'));

/***/ }),

/***/ 283:
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

var _movies = __webpack_require__(66);

var initialState = {
	selectedMovie: {},
	popularMovies: [],
	upComingMovies: [],
	genreMovies: []
};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchMovieTrailers = exports.fetchMovieCredits = exports.fetchMovieDetails = exports.fetchUpcomingtMovies = exports.fetchPopularMovies = exports.fetchGenreMovie = exports.FETCH_MOVIE_TRAILERS = exports.FETCH_MOVIE_CREDITS = exports.FETCH_MOVIE_DETAILS = exports.FETCH_UPCOMING_MOVIES = exports.FETCH_POPULAR_MOVIES = exports.FETCH_GENRE_MOVIES = undefined;

var _axios = __webpack_require__(166);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(281);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_GENRE_MOVIES = exports.FETCH_GENRE_MOVIES = 'fetch_genre_movies';
var FETCH_POPULAR_MOVIES = exports.FETCH_POPULAR_MOVIES = 'fetch_popular_movies';
var FETCH_UPCOMING_MOVIES = exports.FETCH_UPCOMING_MOVIES = 'fetch_upcoming_movies';
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

var fetchUpcomingtMovies = exports.fetchUpcomingtMovies = function fetchUpcomingtMovies() {
	return function (dispatch) {
		_axios2.default.get('https://api.themoviedb.org/3/movie/upcoming?' + _config.API_KEY).then(function (res) {
			return dispatch({
				type: FETCH_UPCOMING_MOVIES,
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

/***/ })

},[282]);