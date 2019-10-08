import { Todo } from '../models/Todo';

export type TodoState = {
  todos: Todo[];
};

export type Actions = {
  type: 'ADD_TODO';
};

export const initialState: TodoState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589,
    },
  ],
};

export const reducer = (state: TodoState, action: Actions) => {
  switch (action.type) {
    default:
      return state;
  }
};
