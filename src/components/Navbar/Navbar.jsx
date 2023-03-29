import React from "react";
import "./Navbar.css";
import logo from "../img/Module Website (2).png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container container-navbar">
        <div className="row">
          <div className="col-10 toolbar">
            <img src={logo} alt="" />
            <div>
                <span className="title-navbar home"><b>  Home</b></span>
                <span  className="title-navbar"><b>About</b></span>
                <span  className="title-navbar"><b>Portfolio</b></span>
                <span  className="title-navbar"><b>News</b></span>
                <span  className="title-navbar"><b>Contact</b></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
