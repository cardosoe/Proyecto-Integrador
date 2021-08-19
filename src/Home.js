import React from "react";
import "./Styles.scss";
import Logo from "./assets/Images/top-logo.svg";

const home = () => {
  return (
    <div>
      <main></main>
      <footer className="footer">
        <div className="copy">2020 © All rights reserved.</div>
        <img src={Logo} alt="Logo 25 Whatts" className="footer-logo" />
      </footer>
    </div>
  );
};

export default home;
