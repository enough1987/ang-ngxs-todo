import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../../todos.model';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../+store/app.state';
import {RemoveTodo} from '../../+store/todo.actions';
import {getTodoState} from '../../+store/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    console.log(store);
    this.todos$ = store.pipe(select(getTodoState));
  }

  deleteTodo(index: number) {
    this.store.dispatch(new RemoveTodo(index));
  }

}
