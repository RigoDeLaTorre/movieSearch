import { combineReducers } from 'redux';
import moviesReducer from './movieReducer'
import tvReducer from './tvReducer'


const rootReducer = combineReducers({
  movies:moviesReducer,
  tv:tvReducer
})

export default rootReducer;
