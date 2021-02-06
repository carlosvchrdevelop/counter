import { makeStyles } from '@material-ui/core';
import CounterProps from './Counter.types';

const useStyles = makeStyles({
  addbtn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: '10px',
  },
  subbtn: {
    background: 'linear-gradient(45deg, #369BFF 30%, #3CE7FF 90%)',
    padding: '10px',
  },
  card: {
    padding: '20px 0',
    margin: (props: CounterProps) => (props.centered ? '0 auto' : '0'),
    width: (props: CounterProps) => props.width || '200px',
  },
  grid: {
    marginTop: '10px',
  },
});

export default useStyles;
