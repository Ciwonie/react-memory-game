import React, { Component } from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "./Footer.css";

const FooterPage = () => (
    <div className="footer-copyright text-center py-3">
      <div fluid>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </div>
    </div>
);

export default FooterPage;
