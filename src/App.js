import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var mockData = {
  id : 1,
  text : "todo",
  complete : true
}

var increId = 1; // ES6 ?

class TodoItem extends Component {
  render() {
    var item = this.props.item;
    return(<li style={{textDecoration : item.complete ? 'line-through' : 'none'}}
             onClick={()=>this.props.toggleComplete(item.id)}>{item.text}</li>)
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        todolist : []
    }
  }
  addItem() {
    var inputValue = this.refs.inputbox.value;

    if(inputValue==="") return;

    this.setState(prevState => {
      prevState.todolist.push(
        {
          id : increId++,
          text : inputValue,
          complete : false
        }
      )
      return prevState;
    });

    this.refs.inputbox.value = "";
  }

  toggleComplete(id) {

      this.setState(prevState => {
          prevState.todolist
                .filter(item => item.id === id)
                .map(item => item.complete = !item.complete);

          return prevState;

          // prevState.todolist.map(
          //   item => {
          //     if(item.id === id) {
          //       item.complete = !item.complete
          //     }
          //   }
          // )
        }

      )
  }

  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <input ref="inputbox" />
        <button onClick={this.addItem.bind(this)}>add</button>
        <ul>
          {
            this.state.todolist.map((item, index) => {
              return (  <TodoItem key={index} item={item}
                  toggleComplete={this.toggleComplete.bind(this)}/> );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
