import React from "react";
import { auth } from "./../../firebase";
import "../../assets/styles/SignUpPage.scss";
class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password1: "",
      password2: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.password1 === this.state.password2) {
      auth
        .createUserWithEmailAndPassword(this.state.email, this.state.password1)
        .then((res) => {
          alert("Account created successfully");
          this.setState({ email: "", password1: "", password2: "" });
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Passwords are not the same!");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.signup} method="POST">
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <input
            type="password"
            name="password1"
            value={this.state.password1}
            onChange={this.handleChange}
            placeholder="Enter password"
          />
          <input
            type="password"
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
            placeholder="Repeat password"
          />
          <button onClick={this.onSubmit}> Submit </button>
        </form>
      </div>
    );
  }
}
export default SignUpPage;
