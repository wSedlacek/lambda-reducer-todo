import React from 'react';

import { reducer, initialState } from '../../state/app.reducer';
import { TodoAdd } from './components/todo-add/todo-add.component';
import { TodoCard } from './components/todo-card/todo-card.component';
import { Todo } from '../../models/Todo';

const Todos = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addTodo = (todo: Todo) => dispatch({ type: 'ADD_TODO', payload: todo });
  const toggleCompleted = (todo: Todo) => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo });

  return (
    <>
      <TodoAdd onSubmit={addTodo} />
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} toggleCompleted={toggleCompleted}></TodoCard>
      ))}
    </>
  );
};

export { Todos };
