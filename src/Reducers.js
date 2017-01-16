import {ADD, COMPLETE } from './Actions';

var increId = 1; // ES6 ?

// function filterRedcer(){
//
// }
export function todoReducer(state=[], action){ // 1. reducer 생성
  switch (action.type) {
    case ADD:{
        return [...state, {
            id : increId++,
            text : action.text,
            complete : false
        }];
    }
    case COMPLETE: {
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

// router 적용할꺼고
// API


// import {combineReducers} from 'redux';
//
// const todoApp  = combineReducers({
//   todoReducer,
//   filterRedcer
// })
//
// export default todoApp;
