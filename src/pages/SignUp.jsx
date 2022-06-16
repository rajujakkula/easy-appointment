import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Input from "../components/Input";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { GoDeviceMobile } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/Button";
import "../styles/Login.css";

const Signup = () => {
  const [input, setInput] = React.useState({});

  const onChangeHandler = ({ target: { name, value } }) => {
    setInput((values) => {
      return { ...values, [name]: value };
    });
  };

  useEffect(() => {
    console.log("updated: ", input);
  }, [input]);

  return (
    <div className="container">
      <form className="content">
        <VscAccount />
        <h3>SignUp</h3>
        <div className="user-details">
          <span>@</span>
          <Input type="text" placeholder="Name" onChange={onChangeHandler} />
        </div>
        <div className="user-details">
          <AiOutlineMail />
          <Input type="email" placeholder="Email" onChange={onChangeHandler} />
        </div>
        <div className="user-details">
          <GoDeviceMobile />
          <Input
            type="tel"
            placeholder="Phone Number"
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
            placeholder="Confirm password"
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
      </form>
    </div>
  );
};

export default Signup;
