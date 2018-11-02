import axios from "axios";
import { API_KEY } from "../config.js";
export const FETCH_GENRE_TV = "fetch_genre_tv";
export const FETCH_POPULAR_TV = "fetch_popular_tv";
export const FETCH_LATEST_TV = "fetch_upcoming_tv";
export const FETCH_TOPRATED_TV = "fetch_toprated_tv";
export const FETCH_AIRINGTODAY_TV = "fetch_airingtoday_tv";
export const FETCH_THISWEEK_TV = "fetch_thisweek_tv";
export const FETCH_TV_CREDITS = "fetch_credits_tv";
export const FETCH_TV_DETAILS = "fetch_details_tv";
export const FETCH_TV_TRAILERS = "fetch_trailers_tv";

export const fetchGenreTv = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/genre/tv/list?${API_KEY}`).then(res =>
    dispatch({
      type: FETCH_GENRE_TV,
      payload: res.data
    })
  );
};

export const fetchPopularTv = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/tv/popular?${API_KEY}`).then(res =>
    dispatch({
      type: FETCH_POPULAR_TV,
      payload: res.data
    })
  );
};

export const fetchLatestTv = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/tv/latest?${API_KEY}`).then(res =>
    dispatch({
      type: FETCH_LATEST_TV,
      payload: res.data
    })
  );
};
export const fetchTopRatedTv = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/tv/top_rated?${API_KEY}`).then(res =>
    dispatch({
      type: FETCH_TOPRATED_TV,
      payload: res.data
    })
  );
};

export const fetchAiringToday = () => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/tv/airing_today?${API_KEY}`)
    .then(res =>
      dispatch({
        type: FETCH_AIRINGTODAY_TV,
        payload: res.data
      })
    );
};

export const fetchTvThisWeek = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/tv/on_the_air?${API_KEY}`).then(res =>
    dispatch({
      type: FETCH_THISWEEK_TV,
      payload: res.data
    })
  );
};

export const fetchTvDetails = id => dispatch => {
  axios.get(`https://api.themoviedb.org/3/tv/${id}?${API_KEY}`).then(res =>
    dispatch({
      type: FETCH_TV_DETAILS,
      payload: res.data
    })
  );
  dispatch(fetchTvCredits(id));
  dispatch(fetchTvTrailers(id));
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
