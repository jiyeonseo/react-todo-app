export const ADD = 'ADD';
export const COMPLETE = 'COMPLETE';

// 이번 실습에 필요한 import들
import reqwest from 'reqwest';
import {createAction} from 'redux-actions';
// 1. 액션을 추가한다
export const FETCH_LIST = "FETCH_LIST";
export const FETCH_ONE = "FETCH_ONE";

// 2. 액션 크리에이터를 추가한다.
export function fetch(){
  return (dispatch, getState) => {
    const requestFetch = reqwest({url :'/list', method:'GET'});
    requestFetch.then((response) => {
      dispatch(createAction(FETCH_LIST)({list : response }))
    });
  }
}

export function fetchOne(id){
  return (dispatch, getState) => {
    const requestFetch = reqwest({url :'/'+id});
    requestFetch.then((response) => {
      dispatch(createAction(FETCH_ONE)({currentTodo : response }))
    });
  }
}

// action creator
export function addTodo(text) {
  return (dispatch, getState) => {
    const requestFetch = reqwest({
      url :'/'
      , data : { text : text , complete : false}   });
    requestFetch.then((response) => {
      dispatch(createAction(ADD)({ todo : makeData(text) }))
    });
  }
}

export function completeTodo(id, complete){
  return (dispatch, getState) => {
    const requestFetch = reqwest({url :'/'+id , data : {  complete : !complete } });
    requestFetch.then((response) => {
      dispatch(fetch());
    });
  }
}
