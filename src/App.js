import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo, completeTodo } from './Actions';
import TodoItem from './TodoItem';
import {connect} from 'react-redux';

class App extends Component { // smart component 영민한 컴포넌트
  constructor(props){
    super(props);
  }
  addItem() {
    var inputValue = this.refs.inputbox.value;
    if(inputValue==="") return;
    // 로직 처리
    this.props.dispatch(addTodo(inputValue)); //


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
    // state : state.searchStore
  }
}

// Provider : 공급 '컴포넌트 '
export default connect(select)(App); // 함수에요. 상태값/컴포넌트를 연결
