import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "../styles/Login.css";
import { auth, provider } from "../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Navbar from "../components/Navbar/Navbar";

export const Login = () => {
  //
  const navigate = useNavigate();

  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  let name, value;

  const onChangeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const logIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, input.email, input.password).then(
        (userCrendential) => {
          if (userCrendential) {
            navigate("/");
          }
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithGoogle = () => {
    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form className="content" method="POST" onSubmit={logIn}>
          <h3>LogIn</h3>
          <div className="user-details">
            <AiOutlineMail />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={input.email}
              className="Input-field"
              onChange={onChangeHandler}
            />
          </div>
          <div className="user-details">
            <RiLockPasswordLine />
            <input
              type="text"
              placeholder="password"
              name="password"
              value={input.password}
              className="Input-field"
              onChange={onChangeHandler}
            />
          </div>
          <Button name="LogIn" />
          <p>
            Are You New User ? Please Register
            <NavLink to="/signup" className="link">
              Here
            </NavLink>
          </p>
          <div className="horizontal-line">
            <hr />
            <span className="span-or">Or</span>
            <hr />
          </div>
          <p>Sign In With Google</p>
          <button
            className="google-signup"
            onClick={signInWithGoogle}
            type="button"
          >
            Google
          </button>
        </form>
      </div>
    </>
  );
};
