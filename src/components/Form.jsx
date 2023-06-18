import React from "react";
import Button from "./Button";
import Input from "./input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.value === true ? (
        <Button type="submit" cause="Login" />
      ) : (
        <Input type="password" placeholder="Confirm Password" />
      )}
      {props.value === false && <Button type="submit" cause="Register" />}
    </form>
  );
}

export default Form;
