import React from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.signup}>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button onClick={this.onSubmit}>
            <Link to={"/"}>Login</Link>
          </button>
        </form>
      </div>
    );
  }
}
export default LoginPage;
