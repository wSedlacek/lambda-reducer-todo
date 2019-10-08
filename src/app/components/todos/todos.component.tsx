import React from 'react';

import { reducer, initialState } from '../../state/app.reducer';
import { TodoAdd } from './components/todo-add/todo-add.component';
import { TodoCard } from './components/todo-card/todo-card.component';
import { Todo } from '../../models/Todo';

const Todos = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <TodoAdd onSubmit={(todo: Todo) => dispatch({ type: 'ADD_TODO', payload: todo })} />
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo}></TodoCard>
      ))}
    </>
  );
};

export { Todos };
