import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../+store/app.state';
import { RemoveTodo } from '../../+store/todo.actions';
import { getTodoState } from '../../+store/todo.reducer';
import { Todo } from '../../+store/todo.dictionary';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = store.pipe(select(getTodoState));
  }

  deleteTodo(index: number) {
    this.store.dispatch(new RemoveTodo(index));
  }

}
