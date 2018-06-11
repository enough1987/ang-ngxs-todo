import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TodosComponent} from './todos/todos.component';
import {TodosResolverService} from './todos/services/todos-resolver.service';

const ROUTES: Routes = [
  {
    path: '',
    component: TodosComponent,
    resolve: {
      data: TodosResolverService,
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
