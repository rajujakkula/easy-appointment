import React from "react";
import ReactDOM from "react-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
const BackNavigation = () => {
  const backNavigation = () => {
    window.history.back();
  };
  return ReactDOM.createPortal(
    <button type="button" style={bubbleNavigation} onClick={backNavigation}>
      <RiArrowGoBackFill className="mb-1" style={{ fill: "white" }} />
    </button>,
    document.getElementById("back-navigation")
  );
};

export default BackNavigation;
const bubbleNavigation = {
  position: "fixed",
  right: "2rem",
  bottom: "20px",
  backgroundColor: "#0093b7",
  padding: "10px 14px",
  borderRadius: "50%",
  border: "none",
};
