import { Link } from "react-router-dom";
import { NavItem } from "./";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4 mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand ps-5 fs-3" to="/">
          useContext
        </Link>
        <div
          className="collapse navbar-collapse d-flex justify-content-end pe-5"
          id="navbarNav"
        >
          <div className="navbar-nav">
            <NavItem {...{ name: "Home", path: "/" }} />
            <NavItem {...{ name: "About", path: "/about" }} />
            <NavItem {...{ name: "Login", path: "/login" }} />
          </div>
        </div>
      </div>
    </nav>
  );
};
