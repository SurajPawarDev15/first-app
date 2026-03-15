import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter Component</h1>
      <p>Counter: {count}</p>
      <button name="Increase" color="blue" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <br />
      <button name="Decrease" color="red" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </>
  );
}

export default Counter;
