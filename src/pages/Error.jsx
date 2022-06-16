import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "../styles/Error.css";

const ErrorPage = () => {
  return (
    <div className="container-error ">
      <div className="image-error">
        <img
          src="https://img.freepik.com/free-vector/internet-connection-problem-concept-illustration-404-found-error-page-cat-sits-laptop_450656-182.jpg"
          alt=""
        />
      </div>
      <Link to="/" className="back-to-home">
        <IoIosArrowBack />
        go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
