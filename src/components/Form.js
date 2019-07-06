import React from "react";
import Input from "./Input";
import Submit from "../components/Submit";
import { Link } from "react-router-dom";

const divStyle = {
  padding: 5
};

function Form(props) {
  const fields = props.fields;
  function Inputs() {
    return fields.map(fields => (
      <div style={divStyle} key={fields.key}>
        <Input
          name={fields.name}
          placeholder={fields.placeholder}
          type={fields.type}
          required={fields.required}
          onChange={props.onChange}
          autocomplete={"off"}
        />
      </div>
    ));
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.info}</p>
      <Inputs />
      <Link to="/">
        <Submit onClick={props.onSubmitCallback} value="Login" />
      </Link>
    </div>
  );
}

export default Form;
