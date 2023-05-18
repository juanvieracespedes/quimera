import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import NavBarStyle from "./NavBar.js";

const NavBar = () => {
  const navBarStyle = NavBarStyle();

  return (
    <ul className="nav" style={navBarStyle}>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Inicio
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Productos
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contacto
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
        >
          <ShoppingCartTwoToneIcon fontSize="large" />
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
