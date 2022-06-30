import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../components/Input";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { GoDeviceMobile } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/Button";
import "../styles/Login.css";
import { auth, provider } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import Navbar from "../components/Navbar/Navbar";
const Signup = () => {
  const [input, setInput] = React.useState({});

  const registration = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );
      console.log(res);
      auth.currentUser.emailVerified = true;
    } catch (error) {
      console.log(error.message);
    }

    updateProfile(auth.currentUser, {
      displayName: input.name,
    })
      .then(function () {
        const displayName = auth.currentUser.displayName;
        console.log("display=>:" + displayName);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  const onChangeHandler = ({ target: { name, value } }) => {
    setInput((values) => {
      return { ...values, [name]: value };
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form className="content" onSubmit={registration}>
          <VscAccount />
          <h3>SignUp</h3>
          <div className="user-details">
            <span>@</span>
            <Input
              type="text"
              placeholder="name"
              name="name"
              onChange={onChangeHandler}
            />
          </div>
          <div className="user-details">
            <AiOutlineMail />
            <Input
              type="email"
              placeholder="email"
              onChange={onChangeHandler}
            />
          </div>
          <div className="user-details">
            <GoDeviceMobile />
            <Input
              type="tel"
              placeholder="phoneNumber"
              onChange={onChangeHandler}
            />
          </div>
          <div className="user-details">
            <RiLockPasswordLine />
            <Input
              type="text"
              placeholder="password"
              onChange={onChangeHandler}
            />
          </div>
          <div className="user-details">
            <RiLockPasswordLine />
            <Input
              type="text"
              placeholder="confirm password"
              onChange={onChangeHandler}
            />
          </div>
          <Button name="SignUp" />

          <p>
            Are You Existing User ? Please Login{" "}
            <NavLink to="/login" className="link">
              Here
            </NavLink>
          </p>
          <p>Sign Up With Google</p>
          <button
            className="google-signup"
            type="button"
            onClick={signInWithGoogle}
          >
            Google
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
