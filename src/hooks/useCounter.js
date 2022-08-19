import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = (value = 1) => {
    setCounter(counter + value);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  const handleSubtraction = (value = 1) => {
    if(counter - value < 0) return setCounter(1)
    setCounter(counter - value);
  };

  return {
    counter,
    handleAdd,
    handleReset,
    handleSubtraction,
  };
};
