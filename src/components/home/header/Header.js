import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "./Logo.svg";
import "./Header.scss";
const Header = () => {
  const [search, changeSearch] = useState("");
  const handleChange = (e) => changeSearch(e.target.value);
  const history = useHistory();
  const gotoSearch = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/search",
      state: {
        search: search,
      },
    });
  };
  return (
    <div className="container">
      <Link to="/" className="link">
        <span>
          <img src={Logo} alt="" className="logo" />
          <span className="RYT">Rate Your Teacher</span>
        </span>
      </Link>
      <form onSubmit={gotoSearch}>
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          value={search}
          onChange={handleChange}
          placeholder="&#128269;   Search for teacher..."
        />
        <button style={{ display: "none" }}></button>
      </form>
    </div>
  );
};
export default Header;
