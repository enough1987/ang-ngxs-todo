import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../../todos.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../+store/app.state';
import {RemoveTodo, TodoActions} from '../../+store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  // Section 1
  // We're defining an observable named tutorials which we will later display in the template.
  todos$: Observable<Todo[]>;

  // Section 2
  // We're accessing the store from ngrx within the constructor, and then selecting tutorial which is defined
  // as a the property from app.module.ts in StoreModule.forRoot({}). This calls the todoReducer and returns the todos state
  constructor(private store: Store<AppState>) {
    console.log(store);
    this.todos$ = store.select('todos');
  }

  deleteTodo(index: number) {
    this.store.dispatch(new RemoveTodo(index));
  }

}
