import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";
const Header = () => {
  return (
    <div className="Welcome">
      <div className="header">Welcome</div>
      <div className="text">
        What is "Rate Your Teacher"?? This project is for both students and
        teachers, to let the student rate his teacher and give him feedback and
        let the other students get to know which is the best teacher he will
        learn from him... about Teachers, they can get to know the weak points
        that they have.
      </div>
      <div>
        <Link to="/login" params={{ notFromOutside: true }} className="button">
          <span className="buttonText">Log in</span>
        </Link>
        <Link to="/login" params={{ notFromOutside: true }} className="button">
          <span className="buttonText">Log in</span>
        </Link>
      </div>
    </div>
  );
};
export default Header;
