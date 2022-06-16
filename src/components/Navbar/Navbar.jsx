import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import NavLinksComponent from "./NavLinksComponent";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    //
    const screenSize = () => {
      window.innerWidth > 600 && setNavToggle(false);
    };

    window.addEventListener("resize", screenSize);

    if (navToggle) {
      document.body.classList.add("activeNavbar");
      document.getElementById("root").classList.add("disabledDiv");
    } else {
      document.body.classList.remove("activeNavbar");
      document.getElementById("root").classList.remove("disabledDiv");
    }

    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, [navToggle]);

  const handleMenu = (e) => {
    e.target.className !== "Navbar-mobile" &&
      e.target.className !== "list-items" &&
      setNavToggle(false);
  };

  return ReactDOM.createPortal(
    <>
      <nav>
        <h4>
          <Link to="/" onClick={() => setNavToggle(false)}>
            Easy Appointments
          </Link>
        </h4>
        <NavLinksComponent />
        <div
          className="Menu-icon"
          onClick={() => {
            setNavToggle((prev) => !prev);
          }}
        >
          {navToggle ? (
            <IoMdClose size="2em" className="me-3" />
          ) : (
            <FcMenu size="2em" className="me-3 " />
          )}
        </div>
      </nav>

      <div className={navToggle ? "background-open" : ""} onClick={handleMenu}>
        <NavLinksComponent
          navToggle={navToggle}
          dynamicStyle="hidden-desktop"
          setNavToggle={setNavToggle}
        />
      </div>
    </>,
    document.getElementById("portal-root")
  );
};

export default Navbar;
