import { useCallback, useState } from "react";

import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const handleAdd = useCallback((value) => {
    setCounter((counter) => counter + value);
  }, []);

  return (
    <div>
      <h1>
        useCallback Hook: <small>{counter}</small>
      </h1>
      <hr />
      <ShowIncrement {...{ handleAdd }} />
    </div>
  );
};
