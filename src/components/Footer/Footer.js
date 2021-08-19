import React from "react";
import "../Footer/Footer.scss";
import Logo from "../../assets/Images/top-logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="copy">2020 © All rights reserved.</div>
        <a href="../Section1/Section1.js/#Section1">
          <img src={Logo} alt="Logo 25 Whatts" className="footer-logo" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
