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
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </li>
      <li>
        <ShoppingCartTwoToneIcon />
      </li>
    </ul>
  );
};

export default NavBar;
