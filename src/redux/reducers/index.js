import { combineReducers } from 'redux';

import todoListReducer from './TodoList';

const rootReducers = combineReducers({
  todoList: todoListReducer,
});

export default rootReducers;
