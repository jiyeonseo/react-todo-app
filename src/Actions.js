export const ADD = 'ADD';
export const COMPLETE = 'COMPLETE';

// action creator
export function addTodo(text) {
  return {
      type : ADD,
      text : text
    };
}

export function completeTodo(id){
  return {
    type : COMPLETE,
    id
  }
}
