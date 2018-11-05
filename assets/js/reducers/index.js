import { combineReducers } from "redux";
import moviesReducer from "./movieReducer";
import tvReducer from "./tvReducer";
import selectedItemReducer from "./selectedItemReducer";
import searchReducer from "./searchReducer";
import actorReducer from "./actorReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  tv: tvReducer,
  selectedItem: selectedItemReducer,
  searchResults: searchReducer,
  actor: actorReducer
});

export default rootReducer;
