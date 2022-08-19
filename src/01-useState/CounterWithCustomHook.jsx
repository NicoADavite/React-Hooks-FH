import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, handleAdd, handleReset, handleSubtraction } = useCounter(10);
  return (
    <>
      <h1>Contador con Hook: {counter}</h1>
      <hr />
      <button onClick={() => handleAdd(10)} className="btn btn-primary">
        +1
      </button>
      <button onClick={handleReset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => handleSubtraction(10)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
