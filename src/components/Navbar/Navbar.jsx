import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import "../Navbar/Navbar.css";
import { CgLogIn } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { auth } from "../../firebase/firebase";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    //
    let screenSize = () => {
      window.innerWidth > 600 && setNavToggle(false);
    };

    window.addEventListener("resize", screenSize);

    if (navToggle) {
      if (
        document.getElementById("mon")?.classList.contains("nav-link-a") ||
        document.getElementById("mon")?.classList.contains("hidden-desktop")
      ) {
        document.getElementById("mon").classList.add("Navbar-mobile");
        document
          .getElementById("mon")
          .classList.remove("nav-link-a", "hidden-desktop");
      }
      document.body.classList.add("activeNavbar");
      document.getElementById("root").classList.add("disabledDiv");
    } else {
      if (document.getElementById("mon")?.classList.contains("Navbar-mobile")) {
        document.getElementById("mon").classList.remove("Navbar-mobile");
        document.getElementById("mon").classList.add("hidden-desktop");
      }

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
        {window.innerWidth > 601 && (
          <ul className="nav-link">
            <li className="list-items">
              <Link to="/" onClick={() => setNavToggle((prev) => !prev)}>
                <FaHome /> Home
              </Link>
            </li>

            {!auth.currentUser && (
              <li className="list-items">
                <Link to="/login" onClick={() => setNavToggle((prev) => !prev)}>
                  <CgLogIn /> Login
                </Link>
              </li>
            )}

            {!auth.currentUser && (
              <li className="list-items">
                <Link
                  to="/signup"
                  onClick={() => setNavToggle((prev) => !prev)}
                >
                  <GoSignIn /> Signup
                </Link>
              </li>
            )}

            {auth.currentUser && (
              <li className="list-items">
                <Link
                  to="/profile"
                  onClick={() => setNavToggle((prev) => !prev)}
                >
                  <MdAccountCircle /> {auth?.currentUser.displayName}
                </Link>
              </li>
            )}
          </ul>
        )}
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
        {window.innerWidth < 601 && (
          <ul className="nav-link-a" id="mon">
            <li className="list-items">
              <Link to="/" onClick={() => setNavToggle((prev) => !prev)}>
                <FaHome /> Home
              </Link>
            </li>

            {!auth.currentUser && (
              <li className="list-items">
                <Link to="/login" onClick={() => setNavToggle((prev) => !prev)}>
                  <CgLogIn /> Login
                </Link>
              </li>
            )}

            {!auth.currentUser && (
              <li className="list-items">
                <Link
                  to="/signup"
                  onClick={() => setNavToggle((prev) => !prev)}
                >
                  <GoSignIn /> Signup
                </Link>
              </li>
            )}

            {auth.currentUser && (
              <li className="list-items">
                <Link
                  to="/profile"
                  onClick={() => setNavToggle((prev) => !prev)}
                >
                  <MdAccountCircle /> {auth?.currentUser.displayName}
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </>,
    document.getElementById("portal-root")
  );
};

export default Navbar;
