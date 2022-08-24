import { useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const user = {
  //   name: "Nico",
  //   age: 25,
  //   country: "Argentina",
  // };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
