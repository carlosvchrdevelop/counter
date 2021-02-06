import {
  Button, Typography, Card, Grid,
} from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import useStyles from './Counter.styles';
import CounterProps from './CounterProps';

/**
 * Renders a styled counter with two buttons to increase and decrease the counter.
 * @author Cavcha
 */
const Counter = (props: CounterProps) => {
  const [counter, setCounter] = useState(0);
  const classes = useStyles(props);

  const addTick = () => {
    setCounter((old) => old + 1);
  };

  const subTick = () => {
    setCounter((old) => (props.gtz ? Math.max(0, old - 1) : old - 1));
  };

  useEffect(() => {
    (props.fn !== undefined) && props.fn(counter);
  }, [counter]);

  return (
    <Card className={classes.card}>
      <Typography variant="h2" align="center">
        {counter}
      </Typography>
      <Grid spacing={1} justify="center" container className={classes.grid}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.addbtn}
            onClick={addTick}
          >
            <Add />
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.subbtn}
            onClick={subTick}
          >
            <Remove />
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Counter;
