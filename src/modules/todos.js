// 액션 타입 정의
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

// 액션 생성자 함수 정의
let id = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: id++,
    text,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

//초기 상태 정의
const initialState = [];

// 리듀서 함수 정의
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
