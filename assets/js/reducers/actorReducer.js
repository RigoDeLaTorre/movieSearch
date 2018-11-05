import {
  FETCH_ACTOR_MOVIECREDITS,
  FETCH_ACTOR_DETAILS
} from "../actions/actor";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTOR_DETAILS:
      return action.payload;
    case FETCH_ACTOR_MOVIECREDITS:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}
