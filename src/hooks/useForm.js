import { useState } from "react";

export const useForm = (initialValue) => {
  const [formState, setFormState] = useState(initialValue);

  const handleReset = () => {
    setFormState(initialValue);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    
  return {
    ...formState,
    formState,
    handleChange,
    handleReset
  };
};
