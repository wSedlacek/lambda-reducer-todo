import { Todo } from '../models/Todo';

export type TodoState = {
  todos: Todo[];
};

export type Actions = {
  type: 'ADD_TODO';
  payload: Todo;
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
  const { payload, type } = action;

  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    default:
      return state;
  }
};
