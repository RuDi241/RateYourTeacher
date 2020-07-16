import React from "react";
import { FaStar } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Comment from "../messages/Comment";
import "./CommentsPage.scss";
const CommentsPage = (props) => {
  const history = useHistory();
  const makeStars = (active) => {
    let stars = [];
    for (var i = 1; i <= 5; i++) {
      if (i <= active) stars.push(<FaStar size={18} color="#984673" />);
      else {
        stars.push(<FaStar size={18} color="gray" />);
      }
    }
    return stars;
  };
  const back = (e) => {
    e.preventDefault();
    history.goBack(-1);
  };
  return (
    <div className="CommentsPage">
      <div className="profile">
        <div className="left">
          <img src="" alt="" />
          <h4> Reviews</h4>
          <div className="stars">{makeStars(3.5)}</div>
          <table>
            <tr>
              <td>
                <span>Easiness: </span>
                <div class="one"></div>
              </td>
            </tr>
            <tr>
              <td>
                <span>Helpfulness:</span> <div class="two"></div>
              </td>
            </tr>
            <tr>
              <td>
                <span>Knowledge: </span>
                <div class="three"></div>
              </td>
            </tr>
          </table>
          <button onClick={back}>Back</button>
        </div>
        <div className="right">
          <div className="info">
            <div>
              <span>Name: </span>Ziad Ali
            </div>
            <div>
              <span>School: </span> Code For Palestine
            </div>
            <div>
              <span>Subject: </span>Computer Science
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <h1>Comments</h1>
        <Comment
          comment="Helll;;lldasfdsafadsfdaskljffffffffffffffasf sdafkldsafhhhhhh dsfkldsjf dsalkf dslkfj dsklfj dskl jfdksl jfdskl fj"
          rating={2}
          likes={3}
          dislikes={3}
        />
        <Comment
          comment="Helll;;lldasfdsafadsfdaskljffffffffffffffasf sdafkldsafhhhhhh dsfkldsjf dsalkf dslkfj dsklfj dskl jfdksl jfdskl fj"
          rating={5}
          likes={2}
          dislikes={10}
        />
      </div>
    </div>
  );
};

export default CommentsPage;
