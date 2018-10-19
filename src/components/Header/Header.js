import React, { Component } from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title ">{props.children}</div>
    <div className="scores badge badge-primary">
      Score: {props.score} Highescore: {props.highscore}
    </div>
  </div>
);

export default Header;
