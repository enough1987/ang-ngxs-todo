import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {TodosModule} from './todos/todos.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.router';
import {EffectsModule} from '@ngrx/effects';

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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    TodosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
