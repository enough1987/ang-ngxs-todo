import {Todo} from '../todos/todos.model';

export interface AppState {
  readonly todos: Todo[];
}
