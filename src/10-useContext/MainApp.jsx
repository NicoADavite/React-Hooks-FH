import { Navigate, Route, Routes } from "react-router-dom";

import { AboutPage } from "./pages";
import { HomePage } from "./pages";
import { LoginPage } from "./pages";

import { NavBar } from "./components/NavBar";

export const MainApp = () => {
  return (
    <>
        <NavBar className="my-5"/>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    </>
  )
}
