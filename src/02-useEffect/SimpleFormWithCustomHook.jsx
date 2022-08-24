import React from "react";
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
  };
  const { formState, handleChange, handleReset } = useForm(initialValue);
  const { username, email, password } = formState;
  return (
    <div>
      <h1 className="mb-3">Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control mb-3"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="email"
        className="form-control mb-3"
        name="email"
        placeholder="nico@gmail.com"
        value={email}
        onChange={handleChange}
      />

      <input
        type="password"
        className="form-control mb-3"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <button className="btn btn-danger form-control" onClick={handleReset}>
        Borrar
      </button>
    </div>
  );
};
