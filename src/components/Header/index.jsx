import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";

import "./style.scss";

export default function Header() {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "linesChildren",
    });

    new SplitText("#header-text", {
      type: "lines",
      linesClass: "linesParent",
    });
    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.3,
      ease: "power2",
    });
  }, []);

  return (
    <section className={"header-container"} data-scroll-section>
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Art Object</h1>
    </section>
  );
}
