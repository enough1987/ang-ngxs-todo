import { Injectable } from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {SideEffectTodo, TodoActions} from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions
  ) { }

 @Effect({dispatch: false}) exemple$ = this.actions$
    .ofType<SideEffectTodo>(TodoActions.SIDE_EFFECT)
   .pipe(
     map(data => {
       console.log('from side effect ', data);
     })
   );

}
