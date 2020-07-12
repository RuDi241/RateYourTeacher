import React from "react";
import LoginForm from "../forms/LoginForm";
const LoginPage = (props) => {
  return (
    <div>
      <h1>LoginPage</h1>
      <LoginForm notFromOutside={props.notFromOutside} />
    </div>
  );
};

export default LoginPage;
