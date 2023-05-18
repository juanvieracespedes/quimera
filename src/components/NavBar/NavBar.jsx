import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';



const NavBar = () => {
    return (
      <ul className="nav">
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