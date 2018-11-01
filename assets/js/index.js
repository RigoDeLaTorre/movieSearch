import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import rootReducer from './reducers'
import axios from 'axios'

import HomePage from './containers/HomePage.js'
import Nav from './components/Nav.js'
import MovieDetails from './containers/MovieDetails'
import UpcomingMovies from './containers/upcomingMovies'
import PopularMovies from './containers/popularMovies'
import HomeMainPic from './containers/homemainpic'

const initialState = {}
const middleware = [thunk]

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div id="home">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/moviedetails" component={MovieDetails} />
					<Route path="/dfgdfg" component={HomePage} />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
)
