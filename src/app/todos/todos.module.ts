import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateTodoComponent} from './components/create-todo/create-todo.component';
import {TodoComponent} from './components/todo/todo.component';
import {StoreModule} from '@ngrx/store';
import {todoReducer} from './+store/todo.reducer';
import {TODO_STORE_NAME} from './+store/todo.dictionary';


const COMPONENTS = [
  TodoComponent,
  CreateTodoComponent
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_STORE_NAME, todoReducer),
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class TodosModule { }
