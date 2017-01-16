import React, { Component } from 'react';
import {completeTodo} from './Actions';

export default class TodoItem extends Component { // dumb component  우직한 컴포넌트
  // state
  constructor(props){
    super(props);
  }

  toggleComplete(id) {
    this.props.dispatch(completeTodo(id));
  }

  render() {
    var item = this.props.item;
    return(<li style={{textDecoration : item.complete ? 'line-through' : 'none'}}
             onClick={()=>this.toggleComplete(item.id)}>{item.text}</li>)
  }
}
