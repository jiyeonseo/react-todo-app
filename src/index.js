import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { createStore } from 'redux'; // store 생성을 위해
import App from './App';
import {todoReducer} from './Reducers';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import Details from './Details';

// 2 . Store 생성 리듀서에 맞는 State를 만들어야 한다.
var store = createStore(todoReducer);

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
