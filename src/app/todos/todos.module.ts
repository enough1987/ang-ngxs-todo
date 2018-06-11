import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './+store/todo.reducer';
import { TODO_STORE_NAME } from './+store/todo.dictionary';
import { TodosComponent } from './todos.component';
import {TodosResolverService} from './services/todos-resolver.service';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './+store/todo.effects';


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
    StoreModule.forFeature(TODO_STORE_NAME, todoReducer),
    EffectsModule.forFeature([TodoEffects])
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
