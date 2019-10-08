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
};

const TodoCard = (props: TodoCardProps) => {
  const classes = useStyles({});

  const { todo } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
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
