import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("ahí vamos...");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
    const { counter, handleAdd } = useCounter(1000);

    const memorizedValue = useMemo( () => { heavyStuff(counter) }, [counter])
    const [show, setShow] = useState(true);
  return (
    <div>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{ memorizedValue }</h4>
      <br />
      <button className="btn btn-primary" onClick={() => handleAdd(1)}>
        +1
      </button>
      <br />
      <br />
      <div>
        <button
          className="btn btn-outline-primary"
          onClick={() => setShow(!show)}
        >
          show / hide {show && JSON.stringify(show)}
        </button>
      </div>
    </div>
  );
};
