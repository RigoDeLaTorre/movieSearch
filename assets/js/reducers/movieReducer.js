import {
  FETCH_UPCOMING_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_TOPRATED_MOVIES,
  FETCH_NOWPLAYING_MOVIES,
  FETCH_GENRE_MOVIES
} from "../actions/movies";

const initialState = {
  popularMovies: [],
  upComingMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  genreMovies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        upComingMovies: action.payload
      };
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      };
    case FETCH_NOWPLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.payload
      };
    case FETCH_TOPRATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload
      };
    case FETCH_GENRE_MOVIES:
      return {
        ...state,
        genreMovies: action.payload
      };

    default:
      return state;
  }
}
