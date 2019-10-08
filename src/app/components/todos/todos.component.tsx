import React from 'react';

import { Fab, Icon, makeStyles } from '@material-ui/core';

import { reducer, initialState } from '../../state/app.reducer';
import { TodoAdd } from './components/todo-add/todo-add.component';
import { TodoCard } from './components/todo-card/todo-card.component';
import { Todo } from '../../models/Todo';

const useStyles = makeStyles(() => ({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
}));

const Todos = () => {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addTodo = (todo: Todo) => dispatch({ type: 'ADD_TODO', payload: todo });
  const toggleCompleted = (todo: Todo) => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });

  return (
    <>
      <TodoAdd onSubmit={addTodo} />
      {state.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} toggleCompleted={toggleCompleted}></TodoCard>
      ))}
      <Fab className={classes.fab} color='primary' onClick={clearCompleted}>
        <Icon>delete</Icon>
      </Fab>
    </>
  );
};

export { Todos };
