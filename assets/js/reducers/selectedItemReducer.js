import {
  FETCH_SELECTED_DETAILS,
  FETCH_TV_CREDITS,
  FETCH_TV_TRAILERS,
  FETCH_MOVIE_TRAILERS,
  FETCH_MOVIE_CREDITS
} from "../actions/selected";

const initialState = {
  selectedItem: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SELECTED_DETAILS:
      return { ...state, ...action.payload };

    case FETCH_TV_CREDITS:
      return { ...state, ...action.payload };
    case FETCH_TV_TRAILERS:
      return { ...state, ...action.payload };

    case FETCH_MOVIE_CREDITS:
      return { ...state, ...action.payload };

    case FETCH_MOVIE_TRAILERS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
