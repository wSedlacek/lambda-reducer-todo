import { Todo } from '../models/Todo';

export type TodoState = {
  todos: Todo[];
};

export type Actions = {
  type: 'ADD_TODO' | 'TOGGLE_COMPLETED' | 'CLEAR_COMPLETED';
  payload?: Todo;
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
      if (!payload) return state;
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case 'TOGGLE_COMPLETED':
      if (!payload) return state;
      payload.completed = !payload.completed;
      const todos = state.todos.map((todo) => (todo.id === payload.id ? payload : todo));
      return {
        ...state,
        todos,
      };

    case 'CLEAR_COMPLETED':
      const uncompleted = state.todos.filter((todo) => !todo.completed);
      return {
        ...state,
        todos: uncompleted,
      };

    default:
      return state;
  }
};
