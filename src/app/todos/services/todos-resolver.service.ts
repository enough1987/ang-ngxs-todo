import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GET_TODOS_URL, Todo } from '../+store/todo.dictionary';


@Injectable()
export class TodosResolverService implements Resolve<void> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    console.log(' - TEST - ');
    this.http.get<Todo[]>(GET_TODOS_URL).subscribe((data) => {
      console.log(data);
    });
  }
}
