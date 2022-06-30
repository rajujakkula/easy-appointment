import React from "react";
const Button = ({ name }) => {
  return (
    <button type="submit" className="submit-button">
      {name}
    </button>
  );
};

export default Button;
