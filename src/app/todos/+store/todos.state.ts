import {Action, Selector, State, StateContext} from '@ngxs/store';
import { AddTodo, RemoveTodo, SetupTodo } from './todos.actions';
import { TodosStateModel } from './todos.dictionary';

​
@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    todos: []
  },
})
export class TodosState {

  @Selector() static getTodos(state: TodosStateModel) {
    return state.todos;
  }

  @Action(SetupTodo)
  setupTodos(ctx: StateContext<TodosStateModel>, action: SetupTodo) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todos: [...action.payload]
    });
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodosStateModel>, action: AddTodo) {
    const state = ctx.getState();
    console.log(state, action.payload);
    ctx.setState({
      ...state,
      todos: [...state.todos, action.payload]
    });
  }

  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<TodosStateModel>, action: RemoveTodo) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todos: state.todos.filter((value, index) => index !== action.payload)
    });
  }

}
