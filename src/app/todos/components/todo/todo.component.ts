import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoveTodo } from '../../+store/todos.actions';
import { Todo } from '../../+store/todos.dictionary';
import { Select, Store } from '@ngxs/store';
import {TodosState} from '../../+store/todos.state';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Select(TodosState.getTodos) todos$: Observable<Todo[]>;

  constructor(private store: Store) {
  }

  deleteTodo(index: number) {
    this.store.dispatch(new RemoveTodo(index));
  }

}
