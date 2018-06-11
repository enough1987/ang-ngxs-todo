import { Action } from '@ngrx/store';
import {Todo} from '../todos.model';

// Section 1
// We're defining the type of action, which is in the form of a string constant.
const FEATURE_NAME = '[TODO] ';

export class TodoActions {
  static readonly ADD_TODO = FEATURE_NAME + 'Add';
  static readonly REMOVE_TODO = FEATURE_NAME + 'Remove';
}

// Section 2
// We're creating a class for each action with a constructor that allows us to pass in the payload.
// This isn't a required step, but it does provide you with strong typing.
export class AddTodo implements Action {
  readonly type = TodoActions.ADD_TODO

  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = TodoActions.REMOVE_TODO

  constructor(public payload: number) {}
}

// Section 3
// We're exporting all of our action classes for use within our upcoming reducer.
export type TodoActionsTypes = AddTodo | RemoveTodo;
