import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodosModule} from './todos/todos.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.router';
import {NgxsModule} from '@ngxs/store';

const COMPONENTS = [
  AppComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([]),
    TodosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
