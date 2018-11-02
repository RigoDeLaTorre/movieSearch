import { combineReducers } from "redux";
import moviesReducer from "./movieReducer";
import tvReducer from "./tvReducer";
import selectedItemReducer from "./selectedItemReducer";
import searchReducer from "./searchReducer";
const rootReducer = combineReducers({
  movies: moviesReducer,
  tv: tvReducer,
  selectedItem: selectedItemReducer,
  searchResults: searchReducer
});

export default rootReducer;
