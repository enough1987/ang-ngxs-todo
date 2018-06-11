import { Action } from '@ngrx/store';
import { FEATURE_NAME, Todo } from './todo.dictionary';

export class TodoActions {
  static readonly SETUP_TODO = FEATURE_NAME + 'Setup';
  static readonly SIDE_EFFECT = FEATURE_NAME + 'Side_Effect';
  static readonly ADD_TODO = FEATURE_NAME + 'Add';
  static readonly REMOVE_TODO = FEATURE_NAME + 'Remove';
}

export class SetupTodo implements Action {
  readonly type = TodoActions.SETUP_TODO;

  constructor(public payload: Todo[]) {}
}

export class SideEffectTodo implements Action {
  readonly type = TodoActions.SIDE_EFFECT;
  constructor(public payload?: never) {}
}

export class AddTodo implements Action {
  readonly type = TodoActions.ADD_TODO;

  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = TodoActions.REMOVE_TODO;

  constructor(public payload: number) {}
}

export type TodoActionsTypes = SetupTodo | SideEffectTodo | AddTodo | RemoveTodo;
