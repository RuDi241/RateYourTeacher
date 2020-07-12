import React, { useState } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import { isEmail } from "validator";
import Error from "../messages/Error";
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          id="email"
          placeholder="exapmle@example.com"
          autoComplete="email"
        />
        {errors.email && <Error message={errors.email} />}
        <label htmlFor="password1">Password</label>
        <input
          type="password"
          name="password1"
          id="password1"
          value={data.password1}
          onChange={handleChange}
          placeholder="Make it secure..."
          autoComplete="new-password"
        />
        <input
          type="password"
          name="password2"
          id="password2"
          value={data.password2}
          onChange={handleChange}
          placeholder="Make it secure..."
          autoComplete="new-password"
        />
        {errors.password && <Error message={errors.password} />}

        <button>Login</button>
        {loading && <Error message="true" />}
        {errors.server && <Error message={errors.server} />}
      </form>
    </div>
  );
};
export default SignUpForm;
