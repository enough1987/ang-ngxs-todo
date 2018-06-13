export const TODO_STORE_NAME = 'todos';
export const FEATURE_NAME = '[TODO] ';
export const GET_TODOS_URL = './assets/todos.json';

export interface Todo {
  name: string;
  action: string;
}

export interface TodosStateModel {
  todos: Todo[];
}
