import {
	FETCH_GENRE_TV,
	FETCH_POPULAR_TV,
	FETCH_LATEST_TV,
	FETCH_TOPRATED_TV,
	FETCH_AIRINGTODAY_TV,
	FETCH_THISWEEK_TV,
	FETCH_TV_DETAILS,
	FETCH_TV_CREDITS,

} from '../actions/tv'

const initialState = {
	selectedTv:{},
	popularTv: [],
	latestTv: [],
	topRatedTv: [],
	airingTodayTv: [],
	airingThisWeekTv: [],
	genreTv: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_GENRE_TV:
			return {
				...state,
				genreTv: action.payload
			}
		case FETCH_POPULAR_TV:
			return {
				...state,
				popularTv: action.payload
			}
		case FETCH_LATEST_TV:
			return {
				...state,
				latestTv: action.payload
			}
			case FETCH_TOPRATED_TV:
				return {
					...state,
					topRatedTv: action.payload
				}
				case FETCH_AIRINGTODAY_TV:
					return {
						...state,
						airingTodayTv: action.payload
					}
		case FETCH_THISWEEK_TV:
			return {
				...state,
				airingThisWeekTv: action.payload
			}
			case FETCH_TV_DETAILS:
				return {
					...state,
					selectedTv: { ...state.selectedTv, ...action.payload }
				}

				case FETCH_TV_CREDITS:
					return {
						...state,
						selectedTv: { ...state.selectedTv, ...action.payload }
					}
		default:
			return state
	}
}
