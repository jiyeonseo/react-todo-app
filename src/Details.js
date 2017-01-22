import React, { Component } from 'react';

class Details extends Component { // dumb component  우직한 컴포넌트
  componentDidMount(){
    this.props.dispatch(fetchOne(this.props.params.id))
  }
  render(){
    // const todo = this.props.todos[this.props.id-1];
    console.log(todo);
    return(
      <div>
        <h1>Id : {this.props.currentTodo.id}</h1>
        <button onclick={() => {this.props.dispatch(fetchOne(this.props.params.id))}}> 가져오기 </button>
        <h1>Id : {this.props.currentTodo.id}</h1>
      </div>
    )
  }
}

// select 라는 함수  : 어플리케이션 상태(store 안에 있는 state)하고 컴포넌트(App)이 어떤 props가 필요한지를 연결시켜주는 함수
function select(state) {
  return {
    currentTodo : state.currentTodo
  }
}

// Provider : 공급 '컴포넌트 '
export default connect(select)(Details); // 함수에요. 상태값/컴포넌트를 연결
