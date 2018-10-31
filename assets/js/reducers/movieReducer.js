import {
	FETCH_UPCOMING_MOVIES,
	FETCH_POPULAR_MOVIES,
	FETCH_GENRE_MOVIES,
	FETCH_MOVIE_DETAILS,
	FETCH_MOVIE_CREDITS,
	FETCH_MOVIE_TRAILERS
} from '../actions/movies'

const initialState = {
	selectedMovie: {},
	popularMovies: [],
	upComingMovies: [],
	genreMovies: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_UPCOMING_MOVIES:
			return {
				...state,
				upComingMovies: action.payload
			}
		case FETCH_POPULAR_MOVIES:
			return {
				...state,
				popularMovies: action.payload
			}
		case FETCH_GENRE_MOVIES:
			return {
				...state,
				genreMovies: action.payload
			}
		case FETCH_MOVIE_DETAILS:
			return {
				...state,
				selectedMovie: { ...state.selectedMovie, ...action.payload }
			}
		case FETCH_MOVIE_CREDITS:
			return {
				...state,
				selectedMovie: { ...state.selectedMovie, ...action.payload }
			}
		case FETCH_MOVIE_TRAILERS:
			return {
				...state,
				selectedMovie: { ...state.selectedMovie, ...action.payload }
			}
		default:
			return state
	}
}
