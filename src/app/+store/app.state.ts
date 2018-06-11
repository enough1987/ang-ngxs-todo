import { Todo } from '../todos/+store/todo.dictionary';

export interface AppState {
  readonly todos: Todo[];
}
