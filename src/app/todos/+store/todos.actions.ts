import { FEATURE_NAME, Todo } from './todos.dictionary';

export class SetupTodo {
  static readonly type = FEATURE_NAME + 'Setup';

  constructor(public payload: Todo[]) {}
}

export class SideEffectTodo {
  static readonly type = FEATURE_NAME + 'Side_Effect';
}

export class AddTodo {
  static readonly type = FEATURE_NAME + 'Add';

  constructor(public payload: Todo) {}
}

export class RemoveTodo {
  static readonly type = FEATURE_NAME + 'Remove';

  constructor(public payload: number) {}
}
