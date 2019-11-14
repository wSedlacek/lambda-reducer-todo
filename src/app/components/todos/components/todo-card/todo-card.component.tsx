import React from 'react';

import { Card, Typography, CardContent, makeStyles, Checkbox } from '@material-ui/core';

import { Todo } from '../../../../models/Todo';

const useStyles = makeStyles(() => ({
  card: {
    margin: 12,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  spacer: {
    flexGrow: 1,
  },
}));

type TodoCardProps = {
  todo: Todo;
  toggleCompleted: (todo: Todo) => void;
};

const TodoCard = (props: TodoCardProps) => {
  const { todo, toggleCompleted } = props;
  const classes = useStyles({});

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant='h5' gutterBottom>
          {todo.item}
        </Typography>
        <div className={classes.spacer} />
        <Checkbox onClick={() => toggleCompleted(todo)} />
      </CardContent>
    </Card>
  );
};

export { TodoCard };
