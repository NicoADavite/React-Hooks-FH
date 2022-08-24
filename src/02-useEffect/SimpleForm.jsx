import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "nicodavite1997",
    email: "nico@gmail.com",
  });
  const { username, email } = formState;

  useEffect(() => {
    console.log("me renderizo por primera vez");
  }, []);

  useEffect(() => {
    console.log("me renderizo cuando cambia el formState");
  }, [formState]);

  useEffect(() => {
    console.log("me renderizo cuando cambia el email");
  }, [email]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const newFormState = {
      ...formState,
      [name]: value,
    };

    setFormState(newFormState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <>
      <h1 className="mb-3">Formulario Simple</h1>
      <hr />
      <form className="container mb-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            className="form-control mb-3"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            placeholder="nico@gmail.com"
            value={email}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success">Enviar</button>
      </form>
      {username === "nicodavite1998" && (
        <Message msg={"Usuario ya registrado"} />
      )}
    </>
  );
};
