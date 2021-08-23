import React, { Component } from "react";
import "../Footer/Footer.scss";
import Logo from "../../assets/Images/top-logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Footer extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {

    return (
      <div>
        <footer className="footer">
          <div className="copy">2020 © All rights reserved.</div>
          <a>
            <img src={Logo} alt="Logo 25 Whatts" className="footer-logo" onClick={this.scrollToTop} />
          </a>
        </footer>
      </div>
    );
  };
}
