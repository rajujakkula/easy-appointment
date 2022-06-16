import React from "react";
const Input = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={placeholder}
      className="Input-field"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
