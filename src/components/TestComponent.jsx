import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { increment, decrement, incrementByAmount } from '../redux/counter';

export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <h3>Counter</h3>
      <Button type="button" onClick={() => dispatch(increment())}>+</Button>
      <Button type="button" onClick={() => dispatch(decrement())}>-</Button>
      <Button type="button" onClick={() => dispatch(incrementByAmount(5))}>+5</Button>
      <p>Amount: {count}</p>
    </div>
  );
}
