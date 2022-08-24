import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const [show, setShow] = useState(true);
  const { counter, handleAdd } = useCounter(1);
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => handleAdd(1)}>
        +1
      </button>
      <br /><br />
      <div>
        <button
          className="btn btn-outline-primary"
          onClick={() => setShow(!show)}
        >
          show / hide  {show && JSON.stringify(show)}
        </button>
      </div>
    </div>
  );
};
