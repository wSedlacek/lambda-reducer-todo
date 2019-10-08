import React from 'react';

import { Card, Typography, CardContent, makeStyles, Checkbox } from '@material-ui/core';

import { Todo } from '../../../../models/Todo';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
  },
  spacer: {
    flexGrow: 1,
  },
}));

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = (props: TodoCardProps) => {
  const classes = useStyles({});

  const { todo } = props;
  console.log(todo.item);

  return (
    <Card>
      <CardContent className={classes.card}>
        <Typography variant='h5' gutterBottom>
          {todo.item}
        </Typography>
        <div className={classes.spacer} />
        <Checkbox />
      </CardContent>
    </Card>
  );
};

export { TodoCard };
