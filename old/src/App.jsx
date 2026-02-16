import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(0)
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h3>{count}</h3>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(parseInt(num)))}>Increment by amount</button>
    </div>
  );
};

export default App;
