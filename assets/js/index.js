import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import rootReducer from './reducers';
import axios from 'axios'
import HomePage from './containers/HomePage.js'
import Nav from './components/Nav.js'

const initialState ={}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
      <Provider store ={store}>
        <BrowserRouter>
           <div id='home'>
              <Switch>
                  <Route path="/" component={HomePage} />
              </Switch>
           </div>
        </BrowserRouter>
      </Provider>, document.getElementById('app'))
