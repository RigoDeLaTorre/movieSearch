import axios from "axios";
import { API_KEY } from "../config.js";

export const FETCH_SELECTED_DETAILS = "fetch_selected_details";

export const FETCH_TV_CREDITS = "fetch_credits_tv";
export const FETCH_TV_TRAILERS = "fetch_trailers_tv";

export const FETCH_MOVIE_CREDITS = "fetch_credits_movies";
export const FETCH_MOVIE_TRAILERS = "fetch_trailers_movies";

export const fetchSearchDetails = (id, type = "movie") => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/${type}/${id}?${API_KEY}`)
    .then(res =>
      dispatch({
        type: FETCH_SELECTED_DETAILS,
        payload: res.data
      })
    )
    .then(() => {
      if (type == "tv") {
        dispatch(fetchTvCredits(id));
        dispatch(fetchTvTrailers(id));
      } else {
        dispatch(fetchMovieCredits(id));
        dispatch(fetchMovieTrailers(id));
      }
    });
};

export const fetchTvCredits = id => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/tv/${id}/credits?${API_KEY}`)
    .then(res =>
      dispatch({
        type: FETCH_TV_CREDITS,
        payload: res.data
      })
    );
};

export const fetchTvTrailers = id => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/tv/${id}/videos?${API_KEY}`)
    .then(res =>
      dispatch({
        type: FETCH_TV_TRAILERS,
        payload: res.data
      })
    );
};

export const fetchMovieCredits = id => dispatch => {
  console.log("clicked movie credis");
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?${API_KEY}`)
    .then(res =>
      dispatch({
        type: FETCH_MOVIE_CREDITS,
        payload: res.data
      })
    );
};

export const fetchMovieTrailers = id => dispatch => {
  console.log("clicked movie credis");
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}/videos?${API_KEY}`)
    .then(res =>
      dispatch({
        type: FETCH_MOVIE_TRAILERS,
        payload: res.data
      })
    );
};
