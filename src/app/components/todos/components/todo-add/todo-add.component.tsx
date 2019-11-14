import React from 'react';

import { Card, InputBase, makeStyles } from '@material-ui/core';

import { Todo } from '../../../../models/Todo';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    margin: 10,
  },
  form: {
    display: 'flex',
    flex: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    padding: 8,
  },
}));

type TodoAddProps = {
  onSubmit: (todo: Todo) => void;
};

const TodoAdd = (props: TodoAddProps) => {
  const { onSubmit } = props;
  const classes = useStyles();
  const [title, setTitle] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle('');
    onSubmit({
      id: new Date().valueOf(),
      item: title,
      completed: false,
    });
  };

  return (
    <Card className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <InputBase
          className={classes.input}
          placeholder='Add Todo'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </Card>
  );
};

export { TodoAdd };
