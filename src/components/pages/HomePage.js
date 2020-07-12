import React from "react";
import { Link } from "react-router-dom";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  render() {
    return (
      <div>
        <Link to="/login" params={{ notFromOutside: true }}>
          LoginPage
        </Link>
        <Link to="/login">LoginPage</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/about">About</Link>
        <Link to="/comments">Comments</Link>
      </div>
    );
  }
}

export default HomePage;
