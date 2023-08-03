import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({ color: isActive ? "red" : "" });

  return (
    <nav>
      <NavLink to="/" style={getActiveStyle}>
        Home
      </NavLink>
    </nav>
  );
};

export default Navbar;
