import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "../styles/Login.css";

export const Login = () => {
  //
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

  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = input;
    const res = await fetch(
      "https://easy-appointment-4794f-default-rtdb.firebaseio.com/userLoginform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    if (res) {
      setInput({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="container">
        <form className="content" method="POST" onSubmit={postData}>
          <h3>LogIn</h3>
          <div className="user-details">
            <AiOutlineMail />
            <input
              type="email"
              placeholder="Email"
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
          <p>Sign Up With Google</p>
          <NavLink to="google.com" className="google-signup">
            Google
          </NavLink>
        </form>
      </div>
    </>
  );
};
