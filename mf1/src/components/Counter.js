import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter({ actions }) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const style = {
    margin: '20px',
    padding: '10px',
    border: '1px solid blue',
  };

  return (
    <div style={style}>
      <div>MF1 Counter - {count}</div>
      <button onClick={() => dispatch(actions.increaseCounter())}>
        Increase counter
      </button>
    </div>
  );
}

export default Counter;
