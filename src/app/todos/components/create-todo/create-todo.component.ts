import { Component } from '@angular/core';
import { AddTodo } from '../../+store/todos.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  constructor(private store: Store) {
  }

  public addTodo(name: string, action: string) {
    this.store.dispatch(new AddTodo({name, action}));
  }

}
