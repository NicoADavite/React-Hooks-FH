import { NavLink } from "react-router-dom";

export const NavItem = ({ name, path }) => {
  return (
    <li className="nav-item">
      <NavLink
        className={`nav-link fs-5 ${({ isActive }) => (isActive ? "active" : "")}`}
        to={path}
      >
        {name}
      </NavLink>
    </li>
  );
};
