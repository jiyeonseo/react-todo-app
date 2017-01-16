import React, { Component } from 'react';

export default class Details extends Component { // dumb component  우직한 컴포넌트
  render(){
    return(
      <div>
        <h1>Id : {this.props.params.id}</h1>
      </div>
    )
  }
}
