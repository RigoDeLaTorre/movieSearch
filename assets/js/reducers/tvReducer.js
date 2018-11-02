import {
  FETCH_GENRE_TV,
  FETCH_POPULAR_TV,
  FETCH_TOPRATED_TV,
  FETCH_AIRINGTODAY_TV,
  FETCH_THISWEEK_TV
} from "../actions/tv";

const initialState = {
  popularTv: [],
  topRatedTv: [],
  airingTodayTv: [],
  airingThisWeekTv: [],
  genreTv: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GENRE_TV:
      return {
        ...state,
        genreTv: action.payload
      };
    case FETCH_POPULAR_TV:
      return {
        ...state,
        popularTv: action.payload
      };
    case FETCH_TOPRATED_TV:
      return {
        ...state,
        topRatedTv: action.payload
      };
    case FETCH_AIRINGTODAY_TV:
      return {
        ...state,
        airingTodayTv: action.payload
      };
    case FETCH_THISWEEK_TV:
      return {
        ...state,
        airingThisWeekTv: action.payload
      };

    default:
      return state;
  }
}
