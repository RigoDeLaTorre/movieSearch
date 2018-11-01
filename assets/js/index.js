import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import rootReducer from './reducers'
import axios from 'axios'

import HomePage from './containers/HomePage.js'
import TvPage from './containers/TvPage.js'

import Nav from './components/Nav.js'
import MovieDetails from './containers/MovieDetails'


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
				<Route path="/moviedetails" component={MovieDetails} />
				<Route path="/tv" component={TvPage} />
				<Route exact path="/" component={HomePage} />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
)
