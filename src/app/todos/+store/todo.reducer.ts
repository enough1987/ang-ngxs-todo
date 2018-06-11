import {Todo} from '../todos.model';
import {TodoActionsTypes, TodoActions} from './todo.actions';

// Section 1
// Here, we're defining an initial or default state. This isn't required if you don't want to define a state right out of the box.
const initialState: Todo[] = [
  {
    name: 'initial',
    action: 'nothing'
  }
];

// Section 2
// This is our actual reducer. It takes in a state, which we're defining as a Tutorial type and we've optionally bound it to initialState.
// It also takes in the action from our /actions/todo.actions file.
export function todoReducer(state: Todo[] = initialState, action: TodoActionsTypes) {

  // Section 3
  // First, we use a switch to determine the type of action. In the case of adding a tutorial,
  // we return the new state with the help of our newState() function. We're simply passing in the previous state in the first parameter,
  // and then our action in the second.
  // In the event that the action.type does not match any cases, it will simply return the state,
  // as provided in the first parameter of our reducer.
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return [...state, action.payload];
    case TodoActions.REMOVE_TODO:
      return state.filter((value, index) => index !== action.payload);
    default:
      return state;
  }
}
