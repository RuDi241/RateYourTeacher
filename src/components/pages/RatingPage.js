import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Rating from "../messages/Rating";
import "./RatingPage.scss";
const RatingPage = () => {
  const history = useHistory();
  const [data, changeData] = useState({
    name: history.location.state.search,
    subject: "",
    school: "",
  });

  const handleChange = (e) => {
    changeData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="RatingPage">
      <h1>Search for Teachers</h1>
      <form className="searchOptions">
        <span className="input">
          <input
            name="name"
            id="name"
            placeholder="Teacher's name..."
            onChange={handleChange}
            value={data.name}
          />
        </span>
        <span className="input">
          <input
            name="subject"
            id="subject"
            placeholder="Subject..."
            onChange={handleChange}
            value={data.subject}
          />
        </span>
        <span className="input">
          <input
            name="school"
            id="school"
            placeholder="School..."
            onChange={handleChange}
            value={data.school}
          />
        </span>
      </form>
      <div className="ratings">
        <div className="th">
          <span>Name</span>
          <span>Subject</span>
          <span>Rating</span>
        </div>
        <Rating name="Ziad Ali" subject="cs" rating="4" />
        <Rating name="Amin Hijaz" subject="cs" rating="3" />
      </div>
    </div>
  );
};

export default RatingPage;
