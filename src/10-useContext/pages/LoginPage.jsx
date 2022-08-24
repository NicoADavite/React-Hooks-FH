import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import { Title } from "../components/Title";
import { useForm } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  
  const initialValue = {
    name: "",
    age: "",
    country: "",
  };

  const { name, age, country, formState, handleChange } = useForm(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formState);
    navigate("/")
  };

  return (
    <>
      <Title text="Login" />
      <form onSubmit={handleSubmit} className="container">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Ingrese un nombre"
          className="form-control mb-3"
        />
        <input
          type="text"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Ingrese una edad"
          className="form-control mb-3"
        />
        <input
          type="text"
          name="country"
          value={country}
          onChange={handleChange}
          placeholder="Ingrese un país"
          className="form-control mb-3"
        />
        <button className="btn btn-primary form-control">Setear Usuario</button>
      </form>
    </>
  );
};
