import React, { useState } from "react";
import { auth } from "../../firebase";
import { useHistory, Link } from "react-router-dom";
import { isEmail } from "validator";
import Error from "../messages/Error";
import "./LoginForm.scss";
const LoginForm = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "", server: "" });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate(data);
    setErrors(error);
    if (Object.keys(error).length === 0) {
      setLoading(true);
      auth
        .signInWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          setLoading(false);
          props.notFromOutside ? history.goBack(-1) : history.push("/");
        })
        .catch((err) => {
          setLoading(false);

          setErrors({ ...errors, server: err.message });
        });
    }
  };
  const validate = (data) => {
    const errors = {};
    if (!data.password) errors.password = "Password can't be blank.";
    if (!data.email) errors.email = "Email can't be blank.";
    else if (!isEmail(data.email)) errors.email = "Invalid Email";
    return errors;
  };
  return (
    <div className="loginContainer">
      <div className="LoginForm">
        <span>
          <h1>Hello!</h1>
          <h4>sign in into your account</h4>
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
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="current-password"
            />
          </span>

          {errors.password && <Error message={errors.password} />}
          {errors.server && <Error message={errors.server} />}
          <span className="links">
            <Link style={{ textDecoration: "none" }} to="#">
              <span>Forgot passoword?</span>
            </Link>
            <Link
              to="/signup"
              params={{ notFromOutside: true }}
              style={{ textDecoration: "none" }}
            >
              <span>Or sign up...</span>
            </Link>
          </span>
          <br />
          <button>Sign in</button>

          {loading && <Error message="true" />}
        </form>
      </div>
      <div className="right">
        <div className="header">Welcome Back!</div>
        <br />
        <div className="text">
          Express your honest opinion, view teachers ratings and more. all of
          this just in Rate My Tacher :)
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
