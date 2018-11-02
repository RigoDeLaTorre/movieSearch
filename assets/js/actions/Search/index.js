import axios from "axios";
import { API_KEY } from "../config.js";
export const FETCH_SEARCH_ALL = "fetch_search_all";

export const fetchSearchAll = searchTerm => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?${API_KEY}&query=${searchTerm}`
    )
    .then(res =>
      dispatch({
        type: FETCH_SEARCH_ALL,
        payload: res.data
      })
    );
};
