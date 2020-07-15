import React from "react";
import SignUpForm from "../forms/SignUpForm";
const SignUpPage = (props) => {
  return (
    <div>
      <SignUpForm notFromOutside={props.notFromOutside} />
    </div>
  );
};
export default SignUpPage;
