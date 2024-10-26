import React from "react";
import "./navbar.css";
import booklogo from "../../images/booklogo.jpg";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <img src={booklogo} alt="" className="logo" />
      <label>Book Store</label>
      <ul>
        <li>
          <a href="/home">HOME</a>
        </li>
        <li>
          <a href="/product">BOOKS</a>
        </li>
        <li>
          <a href="/order">ORDER</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
