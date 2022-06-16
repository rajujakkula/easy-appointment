import React from "react";
const Button = ({ name, onSubmit }) => {
  return (
    <button type="submit" className="submit-button" onSubmit={onSubmit}>
      {name}
    </button>
  );
};

export default Button;
