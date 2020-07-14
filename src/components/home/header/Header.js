import React, { useState } from "react";
import Logo from "./Logo.svg";
import "./Header.scss";
const Header = () => {
  const [search, changeSearch] = useState("");
  const handleChange = (e) => changeSearch(e.target.value);
  return (
    <div className="container">
      <span>
        <img src={Logo} alt="" className="logo" />
        <span className="RYT">Rate Your Teacher</span>
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        value={search}
        onChange={handleChange}
        placeholder="&#128269;   Search for teacher..."
      />
    </div>
  );
};
export default Header;
