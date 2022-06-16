import React from "react";
import ProTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Navdata } from "../Navbar/Navbardata";
import "../Navbar/Navbar.css";
import { useEffect } from "react";

const NavLinksComponent = ({ navToggle, dynamicStyle, setNavToggle }) => {
  //
  // if (window.innerWidth > 600) {
  //   dynamicStyle = "nav-link";
  // }
  const handleClick = () => {
    setNavToggle && setNavToggle(() => false);
  };

  return (
    <>
      <ul className={navToggle ? "Navbar-mobile" : dynamicStyle}>
        {Navdata.map((props) => (
          <li key={props.id} className="list-items">
            <NavLink to={props.path} onClick={handleClick}>
              {props.icon}
              {props.feature}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinksComponent;

NavLinksComponent.defaultProps = {
  dynamicStyle: "nav-link",
};
NavLinksComponent.ProTypes = {
  dynamicStyle: ProTypes.string.isRequired,
};
