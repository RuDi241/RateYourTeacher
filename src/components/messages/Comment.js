import React from "react";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
const Comment = (props) => {
  const makeStars = () => {
    let stars = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= props.rating) stars.push(<FaStar size={18} color="#984673" />);
      else {
        stars.push(<FaStar size={18} color="gray" />);
      }
    }
    return stars;
  };
  return (
    <div>
      <div className="info">
        {" "}
        {makeStars()} {props.date}
      </div>
      <div className="comment" style={{ color: " #36204e" }}>
        {props.comment}
      </div>
      <div className="rates" style={{ margin: "5px" }}>
        <FaThumbsUp size={18} color="gray" />
        {props.likes} <FaThumbsDown size={18} color="gray" />
        {props.dislikes}
      </div>
      <br />
      <hr />
    </div>
  );
};
export default Comment;
