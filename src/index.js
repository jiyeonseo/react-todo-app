import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { createStore } from 'redux'; // store 생성을 위해
import App from './App';
import {todoReducer} from './Reducers';
import {Provider} from 'react-redux';

// 2 . Store 생성 리듀서에 맞는 State를 만들어야 한다.
var store = createStore(todoReducer);

// component = connet (매핑을 이렇게 할꺼야)(compoent)
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,document.getElementById('root')
);
