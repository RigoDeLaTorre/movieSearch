import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <section id="footer">
      <h4>
        Copyright<span>&copy;</span>2018
      </h4>
      <h4>
        Code & Design by{" "}
        <a href="http://www.rigodlt.com/" target="_blank">
          Rigo De La Torre
        </a>
      </h4>
    </section>
  );
};

export default Footer;
