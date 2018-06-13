import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GET_TODOS_URL, Todo } from '../+store/todos.dictionary';
import {SetupTodo, SideEffectTodo} from '../+store/todos.actions';
import {Store} from '@ngxs/store';


@Injectable()
export class TodosResolverService implements Resolve<void> {
  constructor(private http: HttpClient,
              private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.http.get<Todo[]>(GET_TODOS_URL).subscribe(todos => {
      console.log(todos);
      this.store.dispatch(new SetupTodo(todos));
      this.store.dispatch(new SideEffectTodo());
    });
  }
}
