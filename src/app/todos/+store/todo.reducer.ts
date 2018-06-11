import { TodoActionsTypes, TodoActions } from './todo.actions';
import { createFeatureSelector } from '@ngrx/store';
import { initialState, Todo, TODO_STORE_NAME } from './todo.dictionary';

export function todoReducer(state: Todo[] = initialState, action: TodoActionsTypes) {

  switch (action.type) {
    case TodoActions.SETUP_TODO:
      return [...action.payload as Todo[]];
    case TodoActions.ADD_TODO:
      return [...state, action.payload];
    case TodoActions.REMOVE_TODO:
      return state.filter((value, index) => index !== action.payload);
    default:
      return state;
  }
}

export const getTodoState = createFeatureSelector<Todo[]>(TODO_STORE_NAME);

