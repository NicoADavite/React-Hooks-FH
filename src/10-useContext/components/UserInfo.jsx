import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const UserInfo = () => {
  const { user } = useContext(UserContext);
  
  const { name, age, country } = user;

  return (
    <div className="container">
      <p className="fs-2"><strong>Nombre:</strong> {name || ""}</p>
      <p className="fs-2"><strong>Edad:</strong> {age && age + " Años" || ""}</p>
      <p className="fs-2"><strong>País:</strong> {country || ""}</p>
    </div>
  );
};
