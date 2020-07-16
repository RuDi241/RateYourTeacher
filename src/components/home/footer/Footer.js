import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <span className="footer">
      <ul>
        <li>
          <a href="www.facebook.com">
            <FaFacebookSquare size={16} />
            {"  "}Facebook
          </a>
        </li>
        <li>
          <a href="www.instagram.com">
            <FaInstagramSquare size={16} />
            {"  "}instagram
          </a>
        </li>
        <li>
          <FaMailBulk size={16} />
          {"  "}Email: rateyourteacher2020@gmail.com
        </li>
      </ul>
    </span>
  );
};

export default Footer;
