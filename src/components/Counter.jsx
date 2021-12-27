import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    if (counter < 1) return;
    setCounter(counter - 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={incrementCounter}>
        Increment
      </button>
      <button type="button" onClick={decrementCounter}>
        Decrement
      </button>
    </div>
  );
}
