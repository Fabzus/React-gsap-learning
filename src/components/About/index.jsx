import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";
import SplitText from "../../utils/Split3.min";
import SectionHeader from "../SectionHeader";

import "./style.css";

export default function About() {
  const ref = useRef();
  const [reveal, setreveal] = useState(false);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    if (onScreen) setreveal(true);
  }, [onScreen]);
  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
      });
      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.3,
        ease: "power2",
      });
    }
  }, [reveal]);
  console.log(`is on screen:${onScreen} \n  revealed: ${reveal}`);
  return (
    <section className={cn("about-section")} data-scroll-section>
      <SectionHeader title="About" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut cum
        odit eius eveniet velit quisquam perspiciatis ad earum praesentium
        harum, iure, voluptate est? In, unde corporis saepe eius totam officia
        explicabo voluptate non ipsam fugiat labore ab ad nam!
      </p>
    </section>
  );
}
