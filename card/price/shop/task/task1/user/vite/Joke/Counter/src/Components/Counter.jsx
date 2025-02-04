import React, { useState, useEffect } from "react";
import "./Counter.css"; 

function Counter() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log(`Counter Value: ${count}`);
  }, [count]);

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
