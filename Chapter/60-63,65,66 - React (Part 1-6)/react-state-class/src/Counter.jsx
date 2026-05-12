import { useState } from "react";
function init() {
  console.log("init function called");
  return Math.random();
}

export default function Counter() {
  const [count, setCount] = useState(0);  // initialization
  // const [count, setCount] = useState(init);  

  console.log("Component rendered");
  console.log(`Count: ${count}`);

  const incCount = () => {
    // setCount(count + 1); // this will not work as expected because of the way React batches state updates. When you 
    // call setCount(count + 1), it schedules an update to set the count to count + 1. However, if you call setCount
    // (count + 1) again before the first update has been processed, it will still use the old value of count, 
    // resulting in both calls setting the count to the same value (count + 1) instead of incrementing it twice.

    // setCount(count + 1);
    // setCount(count + 1);
    setCount((currCount) => currCount + 1); // this will work as expected because it uses the functional form of 
    // setState, which takes a function as an argument. 
    setCount((currCount) => currCount + 1);

    // setCount(25);  

    console.log(`inside incCount func, count: ${count}`);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
