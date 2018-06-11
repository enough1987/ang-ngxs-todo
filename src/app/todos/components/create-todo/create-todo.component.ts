import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodo } from '../../+store/todo.actions';
import { AppState } from '../../../+store/app.state';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  constructor(private store: Store<AppState>) {
  }

  public addTodo(name: string, action: string) {
    this.store.dispatch(new AddTodo({name, action}));
  }

}
