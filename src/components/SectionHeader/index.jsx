import React from "react";
import "./style.scss";

export default function SectionHeader({ title }) {
  return (
    <h6 className="section-header" style={{ transform: "none" }}>
      {title}
    </h6>
  );
}
