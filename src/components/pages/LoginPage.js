import React from "react";
import LoginForm from "../forms/LoginForm";
const LoginPage = (props) => {
  return (
    <div>
      <LoginForm notFromOutside={props.notFromOutside} />
    </div>
  );
};

export default LoginPage;
