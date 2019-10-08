import React from 'react';

import { reducer, initialState } from '../../state/app.reducer';
import { TodoCard } from './components/todo-card/todo-card.component';

const Todos = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log(state);

  return (
    <>
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo}></TodoCard>
      ))}
    </>
  );
};

export { Todos };
