import React from "react";
import Facebook from "../../images/facebook.png";
import Email from "../../images/email.png";
import Globe from "../../images/globe.png";
import Linkedin from "../../images/linkedin.png";

const Footer = () => {
  return (
    <div className="footer-procedure">
      <div className="footer-text">
        ©{new Date().getFullYear()}, Training & Placement Cell, MMMUT, Gorakhpur
      </div>
      <div className="footer-links">
        <a href="https://www.facebook.com/TnP.MMMUT">
          <img src={Facebook} alt="Facebook icon" />
        </a>
        <a href="https://www.linkedin.com/in/tnpmmm/">
          <img src={Linkedin} alt="Linkedin icon" />
        </a>
        <a href="mailto:tnp@mmmut.ac.in">
          <img src={Email} alt="Email icon" />
        </a>
        <a href="http://www.mmmut.ac.in/">
          <img src={Globe} alt="Globe icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
