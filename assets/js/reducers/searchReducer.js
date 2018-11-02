import { FETCH_SEARCH_ALL } from "../actions/search";

const initialState = {
  searchResults: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_ALL:
      return action.payload;
    default:
      return state;
  }
}
