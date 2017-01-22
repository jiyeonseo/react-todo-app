import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { createStore, applyMiddleware } from 'redux'; // store 생성을 위해
import App from './App';
import {todoReducer} from './Reducers';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import Details from './Details';

// thunk를 쓰기 위해 import받는다.
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

const store = createStoreWithMiddleware(todoReducer);

// 2 . Store 생성 리듀서에 맞는 State를 만들어야 한다.
// var store = createStore(todoReducer);

// component = connet (매핑을 이렇게 할꺼야)(compoent)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/details/:id" component={Details}/>
    </Router>
  </Provider>
  ,document.getElementById('root')
);
