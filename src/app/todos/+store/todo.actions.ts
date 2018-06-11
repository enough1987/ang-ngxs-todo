import { Action } from '@ngrx/store';
import {Todo} from '../todos.model';
import {FEATURE_NAME} from './todo.dictionary';

export class TodoActions {
  static readonly ADD_TODO = FEATURE_NAME + 'Add';
  static readonly REMOVE_TODO = FEATURE_NAME + 'Remove';
}

export class AddTodo implements Action {
  readonly type = TodoActions.ADD_TODO;

  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = TodoActions.REMOVE_TODO;

  constructor(public payload: number) {}
}

export type TodoActionsTypes = AddTodo | RemoveTodo;
