import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'; // store 생성을 위해

// store > reducer(로직) >  store > view > action > store >
// 1. reducer 생성  : 로직을 처리하는 함수

// reducer/*
// Components/*
// Actions/*

// action
// { type : "ADD",
//      ,
//       id : 1 ,
//       text : "text",
//       complete : true
//   }
// }
var increId = 1; // ES6 ?
var mockData = {
  id : 1,
  text : "todo",
  complete : true
}

function todoReducer(state=[], action){ // 1. reducer 생성
  switch (action.type) {
    case 'ADD':{
        return [...state, {
            id : increId++,
            text : action.text,
            complete : false
        }];
    }
    case 'COMPLETE': {
      return state
               .map(item => {
                  if(item.id === action.id) {
                    item.complete = !item.complete;
                  }
                  return item;
                });
    }
    default:
        return state;
  }
}


// 2 . Store 생성 리듀서에 맞는 State를 만들어야 한다.
var store = createStore(todoReducer);

// 3 . action을 생성해보자.

// action creator
function addTodo(text) {
  return
}

function completeTodo(id){
  return {
    type : 'COMPLETE',
    id
  }
}

class TodoItem extends Component { // dumb component  우직한 컴포넌트
  // state
  constructor(props){
    super(props);
  }

  toggleComplete(id) {
    // this.props.dispatch(completeTodo(id));
    this.props.dispatch({
      type : 'COMPLETE',
      id
    });
  }

  render() {
    var item = this.props.item;
    return(<li style={{textDecoration : item.complete ? 'line-through' : 'none'}}
             onClick={()=>this.toggleComplete(item.id)}>{item.text}</li>)
  }
}

class App extends Component { // smart component 영민한 컴포넌트
  constructor(props){
    super(props);
  }
  addItem() {
    var inputValue = this.refs.inputbox.value;
    if(inputValue==="") return;
    // 로직 처리
    // this.props.dispatch(addTodo(inputValue)); //
    this.props.dispatch({
        type : 'ADD',
        text : inputValue
      });

    this.refs.inputbox.value = "";
  }

    render() {
    console.log("this.props", this.props);
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <input ref="inputbox" />
        <button onClick={this.addItem.bind(this)}>add</button>
        <ul>
          {
            this.props.todos.map((item, index) => {
              return (  <TodoItem key={index} item={item} dispatch={this.props.dispatch}
                  /> );
            })
          }
        </ul>
      </div>
    );
  }
}


// select 라는 함수  : 어플리케이션 상태(store 안에 있는 state)하고 컴포넌트(App)이 어떤 props가 필요한지를 연결시켜주는 함수
function select(state) {
  return {
    todos : state // component가 받을 props : store가 가진 state
  }
}

import {connect, Provider} from 'react-redux';
// Provider : 공급 '컴포넌트 '
App = connect(select)(App); // 함수에요. 상태값/컴포넌트를 연결
// component = connet (매핑을 이렇게 할꺼야)(compoent)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);
