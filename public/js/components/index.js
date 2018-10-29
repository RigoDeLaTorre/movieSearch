webpackJsonp([0],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUpcomingtMovies = exports.fetchPopularMovies = exports.fetchGenreMovie = exports.FETCH_UPCOMING_MOVIES = exports.FETCH_POPULAR_MOVIES = exports.FETCH_GENRE_MOVIES = undefined;

var _axios = __webpack_require__(161);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(276);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_GENRE_MOVIES = exports.FETCH_GENRE_MOVIES = 'fetch_genre_movies';
var FETCH_POPULAR_MOVIES = exports.FETCH_POPULAR_MOVIES = 'fetch_popular_movies';
var FETCH_UPCOMING_MOVIES = exports.FETCH_UPCOMING_MOVIES = 'fetch_upcoming_movies';

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

var fetchPopularMovies = exports.fetchPopularMovies = function fetchPopularMovies() {
  return function (dispatch) {
    _axios2.default.get('https://api.themoviedb.org/3/movie/popular?' + _config.API_KEY).then(function (res) {
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

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(81);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _movies = __webpack_require__(168);

var _reactRedux = __webpack_require__(82);

var _swiper = __webpack_require__(631);

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HomePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call.apply(_ref, [this].concat(args))), _this), _this.showGenre = function (movie) {
      return movie.map(function (id, i) {
        var genreTitle = 'Sorry..cant find';
        _this.props.genres.map(function (genre) {
          if (id == genre.id) {
            genreTitle = genre.name;
          }
        });
        return _react2.default.createElement(
          'h2',
          { key: i },
          genreTitle
        );
      });
    }, _this.showGen = function (id) {
      var genre = _this.props.genres.filter(function (item) {
        if (item.id == id) return item.name;
      });
      var genre2 = _this.props.genres.filter(function (item) {
        return item.id === id[0] || item.id == id[1];
      });
      // let newArray = this.props.genres.filter(item=>item.id === id || item.id ===id ? item.name : 'no');
      console.log(genre2);
      var name1 = genre2[0] !== undefined ? genre2[0].name : ' ';
      var name2 = genre2[1] !== undefined ? genre2[1].name : ' ';
      return name1 + " / " + name2;
    }, _this.upcomingMovies = function () {
      return _this.props.upcoming.map(function (movie) {
        return _react2.default.createElement(
          'li',
          { key: movie.id },
          _react2.default.createElement(
            'div',
            { className: 'img' },
            _react2.default.createElement('img', { src: 'https://image.tmdb.org/t/p/w500' + movie.poster_path })
          ),
          _react2.default.createElement(
            'div',
            { className: 'info' },
            _react2.default.createElement(
              'h1',
              null,
              movie.title
            ),
            _react2.default.createElement(
              'h2',
              null,
              _this.showGen(movie.genre_ids)
            )
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomePage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchGenreMovie();
      this.props.fetchUpcomingtMovies();
      this.props.fetchPopularMovies();
    }
  }, {
    key: 'render',
    value: function render() {

      if (!this.props.upcoming) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading'
        );
      }
      return _react2.default.createElement(
        'section',
        { className: 'home' },
        _react2.default.createElement(
          'section',
          { id: 'upcoming-movies' },
          _react2.default.createElement(
            'ul',
            null,
            this.upcomingMovies()
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
    genres: state.movies.genreMovies.genres
  };
}
exports.default = (0, _reactRedux.connect)(mapStatetoProps, { fetchUpcomingtMovies: _movies.fetchUpcomingtMovies, fetchPopularMovies: _movies.fetchPopularMovies, fetchGenreMovie: _movies.fetchGenreMovie })(HomePage);

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(72);

var _movieReducer = __webpack_require__(278);

var _movieReducer2 = _interopRequireDefault(_movieReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  movies: _movieReducer2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_KEY = exports.API_KEY = 'api_key=198b9ddcfd3755ac7a132d98b8f8fda2';

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(81);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(82);

var _redux = __webpack_require__(72);

var _reduxThunk = __webpack_require__(257);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterDom = __webpack_require__(256);

var _reducers = __webpack_require__(254);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(161);

var _axios2 = _interopRequireDefault(_axios);

var _HomePage = __webpack_require__(253);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _Nav = __webpack_require__(252);

var _Nav2 = _interopRequireDefault(_Nav);

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
            _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _HomePage2.default })
         )
      )
   )
), document.getElementById('app'));

/***/ }),

/***/ 278:
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
    default:
      return state;

  }
};

var _movies = __webpack_require__(168);

var initialState = {
  selectedMovie: {},
  popularMovies: [],
  upComingMovies: [],
  genreMovies: []
};

/***/ })

},[277]);