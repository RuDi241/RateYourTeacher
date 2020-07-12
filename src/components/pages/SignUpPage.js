import React from "react";
import SignUpForm from "../forms/SignUpForm";
const SignUpPage = (props) => {
  return (
    <div>
      <h1>SignUpPage</h1>
      <SignUpForm notFromOutside={props.notFromOutside} />
    </div>
  );
};
export default SignUpPage;
