import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {todoReducer} from './todos/+store/todo.reducer';
import { TodoComponent } from './todos/components/todo/todo.component';
import { CreateTodoComponent } from './todos/components/create-todo/create-todo.component';

const COMPONENTS = [
  AppComponent,
  TodoComponent,
  CreateTodoComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todos: todoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
