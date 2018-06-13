import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './todos.component';
import {TodosResolverService} from './services/todos-resolver.service';
import {NgxsModule} from '@ngxs/store';
import {TodosState} from './+store/todos.state';


const COMPONENTS = [
  TodosComponent,
  TodoComponent,
  CreateTodoComponent,
];

const SERVICES = [
  TodosResolverService
];

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      TodosState
    ]),
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class TodosModule { }
