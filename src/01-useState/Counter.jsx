import React, { useState } from "react";

export const Counter = () => {
  
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  const handleClick = () => {
    const newState = {
      ...counter,
      counter1: counter1 + 1,
    };

    setCounter(newState);
  };
  return (
    <div className="container">
      <h1>Contador1: {counter1}</h1>
      <h1>Contador2: {counter2}</h1>
      <h1>Contador3: {counter3}</h1>
      <hr />
      <button onClick={handleClick} className="btn btn-primary">
        +1
      </button>
    </div>
  );
};
