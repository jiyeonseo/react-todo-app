import {ADD, COMPLETE, FETCH_LIST, FETCH_ONE } from './Actions';

var increId = 1; // ES6 ?

// 4. 액션을 받을 수 있는 reducer 추가
// {
//   list : [],
//   currentTodo : {}
// }
export function todoReducer(state={}, action){ // 1. reducer 생성
  switch (action.type) {
    case FETCH_LIST:
      return { list : action.payload.list }
    case ADD: {
        // Objec.assign(state , {})
        // state.list.push(action.payload.todo)
        return {
          list : [...state.list, action.payload.todo]
        }
    }
    case FETCH_ONE: {
      return {
        currentTodo : action.payload.currentTodo
      }
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
