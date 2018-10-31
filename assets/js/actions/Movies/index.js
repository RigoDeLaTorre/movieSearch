import axios from 'axios'
import { API_KEY } from '../config.js'
export const FETCH_GENRE_MOVIES = 'fetch_genre_movies'
export const FETCH_POPULAR_MOVIES = 'fetch_popular_movies'
export const FETCH_UPCOMING_MOVIES = 'fetch_upcoming_movies'
export const FETCH_MOVIE_DETAILS = 'fetch_movie_details'
export const FETCH_MOVIE_CREDITS = 'fetch_movie_credits'
export const FETCH_MOVIE_TRAILERS = 'fetch_movie_trailers'

export const fetchGenreMovie = () => dispatch => {
	axios
		.get(`https://api.themoviedb.org/3/genre/movie/list?${API_KEY}`)
		.then(res =>
			dispatch({
				type: FETCH_GENRE_MOVIES,
				payload: res.data
			})
		)
}

export const fetchPopularMovies = page => dispatch => {
	axios
		.get(
			`https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=en-US&page=${page}`
		)
		.then(res =>
			dispatch({
				type: FETCH_POPULAR_MOVIES,
				payload: res.data
			})
		)
}

export const fetchUpcomingtMovies = () => dispatch => {
	axios
		.get(`https://api.themoviedb.org/3/movie/upcoming?${API_KEY}`)
		.then(res =>
			dispatch({
				type: FETCH_UPCOMING_MOVIES,
				payload: res.data
			})
		)
}

export const fetchMovieDetails = id => dispatch => {
	axios.get(`https://api.themoviedb.org/3/movie/${id}?${API_KEY}`).then(res =>
		dispatch({
			type: FETCH_MOVIE_DETAILS,
			payload: res.data
		})
	)
	dispatch(fetchMovieCredits(id))
	dispatch(fetchMovieTrailers(id))
}

export const fetchMovieCredits = id => dispatch => {
	console.log('clicked movie credis')
	axios
		.get(`https://api.themoviedb.org/3/movie/${id}/credits?${API_KEY}`)
		.then(res =>
			dispatch({
				type: FETCH_MOVIE_CREDITS,
				payload: res.data
			})
		)
}

export const fetchMovieTrailers = id => dispatch => {
	console.log('clicked movie credis')
	axios
		.get(`https://api.themoviedb.org/3/movie/${id}/videos?${API_KEY}`)
		.then(res =>
			dispatch({
				type: FETCH_MOVIE_TRAILERS,
				payload: res.data
			})
		)
}
