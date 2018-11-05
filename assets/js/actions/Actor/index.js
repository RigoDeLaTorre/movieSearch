import axios from "axios";
import { API_KEY } from "../config.js";
export const FETCH_ACTOR_MOVIECREDITS = "fetch_actor_moviecredits";
export const FETCH_ACTOR_DETAILS = "fetch_actor_details";

export const fetchActorDetails = id => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/person/${id}?${API_KEY}&language=en-US`)
    .then(res =>
      dispatch({
        type: FETCH_ACTOR_DETAILS,
        payload: res.data
      })
    )
    .then(() => {
      dispatch(fetchPersonMovieCredits(id));
    });
};

export const fetchPersonMovieCredits = id => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?${API_KEY}&language=en-US`
    )
    .then(res =>
      dispatch({
        type: FETCH_ACTOR_MOVIECREDITS,
        payload: res.data
      })
    );
};
