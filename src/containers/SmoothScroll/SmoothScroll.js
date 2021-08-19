import React from "react";
import ReactDOM from "react-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SmoothScroll = () => (
  <div>
    <AnchorLink href="#Section1">Home</AnchorLink>
    <AnchorLink href="../../components/Section2/Section2.js/#Section2">
      About
    </AnchorLink>

    <section id="Section1"></section>
    <section id="Section2"></section>
  </div>
);

ReactDOM.render(<SmoothScroll />, document.getElementById("content"));
