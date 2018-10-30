import axios from 'axios';
import {API_KEY } from '../config.js'
export const FETCH_GENRE_MOVIES ='fetch_genre_movies'
export const FETCH_POPULAR_MOVIES ='fetch_popular_movies'
export const FETCH_UPCOMING_MOVIES ='fetch_upcoming_movies'

export const fetchGenreMovie = () => dispatch =>{
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?${API_KEY}`)
  .then(res => dispatch({
    type:FETCH_GENRE_MOVIES,
    payload:res.data

  }))
}

export const fetchPopularMovies = (page) => dispatch =>{
  axios.get(`https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=${page}`)
  .then(res => dispatch({
    type:FETCH_POPULAR_MOVIES,
    payload:res.data

  }))
}

export const fetchUpcomingtMovies = () => dispatch =>{
  axios.get(`https://api.themoviedb.org/3/movie/upcoming?${API_KEY}`)
  .then(res => dispatch({
    type:FETCH_UPCOMING_MOVIES,
    payload:res.data

  }))
}
