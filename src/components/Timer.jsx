import React, { useEffect, useState } from "react";

const Timer = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const [count20, setCount20] = useState(false);

  const handleStart = () => {
    if (timer) clearTimeout(timer);
    setStart(true);
    setCount(count + 1);
  };

  const handleStop = () => {
    setStart(false);
  };
  let timer;
  useEffect(() => {
    if (start) {
      timer = setTimeout(() => {
        if (count === 0) {
          setCount20(false);
          return;
        }
        if (count === 19) setCount20(true);
        if (count20 === true) {
          setCount(count - 1);
        } else if (count20 === false && count < 20) setCount(count + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  const handleReset = () => {
    setStart(false);
    setCount(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Re - set</button>
    </div>
  );
};

export default Timer;
