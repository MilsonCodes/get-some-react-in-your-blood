import React from "react";

const inputStyle = {
  width: 500,
  margin: "auto",
  height: 20,
  borderRadius: "4px",
  border: "1px solid grey",
  padding: 5
};

function Input(props) {
  return (
    <input
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      required={props.required}
      onChange={props.onChange}
      style={inputStyle}
    />
  );
}

export default Input;
