import React from "react";
import { Link } from "react-router-dom";
import "./Rating.scss";
import { FaStar } from "react-icons/fa";

const Rating = (props) => {
  let stars = [];
  const makeStars = (stars) => {
    stars = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= props.rating) stars.push(<FaStar size={18} color="#984673" />);
      else {
        stars.push(<FaStar size={18} color="gray" />);
      }
    }
    return stars;
  };
  return (
    <div className="Rating">
      <span>
        <Link to="/comments">{props.name} </Link>
      </span>
      <span>{props.subject}</span>
      <span>{makeStars(stars)}</span>
    </div>
  );
};
export default Rating;
