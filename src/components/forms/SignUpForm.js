import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { isEmail } from "validator";
import Error from "../messages/Error";
import "./LoginForm.scss";

const SignUpForm = (props) => {
  const [data, setData] = useState({ email: "", password1: "", password2: "" });
  const [errors, setErrors] = useState({ email: "", password: "", server: "" });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      e.preventDefault();
      auth
        .createUserWithEmailAndPassword(data.email, data.password1)
        .then((res) => {
          auth
            .signInWithEmailAndPassword(data.email, data.password1)
            .then((res) => {
              setLoading(false);
              props.notFromOutside ? history.goBack(-1) : history.push("/");
            })
            .catch((err) => {
              setLoading(false);
              setErrors({ ...errors, server: err.message });
            });
        })
        .catch((err) => {
          setLoading(false);
          setErrors({ ...errors, server: err.message });
        });
    }
  };
  const validate = (data) => {
    const error = {};
    if (!data.password1 || !data.password2)
      error.password = "Password can't be blank.";
    else if (data.password1 !== data.password2)
      error.password = "Passwords are not same.";
    //else error.password = "";
    if (!data.email) error.email = "Email can't be blank.";
    else if (!isEmail(data.email)) error.email = "Invalid Email";
    //else error.email = "";
    return error;
  };
  return (
    <div className="loginContainer" style={{ "flex-direction": "row-reverse" }}>
      <div className="LoginForm">
        <span>
          <h1>Hello!</h1>
          <h4>Create new account</h4>
        </span>
        <form onSubmit={handleSubmit}>
          <span className="input">
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              id="email"
              placeholder="Email"
              autoComplete="email"
            />
          </span>
          {errors.email && <Error message={errors.email} />}
          <span className="input">
            <input
              type="password"
              name="password1"
              id="password1"
              value={data.password1}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="new-password"
            />
          </span>
          <span className="input">
            <input
              type="password"
              name="password2"
              id="password2"
              value={data.password2}
              onChange={handleChange}
              placeholder="Reapeat Password"
              autoComplete="new-password"
            />
          </span>
          {errors.password && <Error message={errors.password} />}
          {errors.server && <Error message={errors.server} />}
          <span className="links">
            <Link
              to="/login"
              params={{ notFromOutside: true }}
              style={{ textDecoration: "none" }}
            >
              Already have an account?
            </Link>
          </span>
          <br />
          <button>Sign up</button>

          {loading && <Error message="true" />}
        </form>
      </div>
      <div className="right">
        <div className="header">Welcome!</div>
        <br />
        <div className="text">
          Create your own account and rate your Teacher and write a feedback and
          comments :)
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
