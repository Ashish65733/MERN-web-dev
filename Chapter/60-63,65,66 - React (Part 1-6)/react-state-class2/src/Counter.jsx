import { useState, useEffect } from "react";

export default function Counter() {
  const [countx, setCountx] = useState(0);
  const [county, setCounty] = useState(0);

  const incCountx = () => {
    setCountx((currCount) => currCount + 1);
  };
  const incCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(function printSomething() {
    console.log("this is a side-effect");
  }, [countx]);

  return (
    <div>
      <p>Countx: {countx}</p>
      <button onClick={incCountx}>+1</button>
      <p>County: {county}</p>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
