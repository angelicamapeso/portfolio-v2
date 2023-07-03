import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../../img/arrow_down_white.svg";

import "./style.scss";

export default function ArrowLink({ text, linkTo, ariaLabel }) {
  const inner = (
    <>
      {text} <Arrow className="more-arrow" />
    </>
  );

  return linkTo ? (
    <Link className="arrow-link" to={linkTo} aria-label={ariaLabel}>
      {inner}
    </Link>
  ) : (
    <p className="arrow-text">{inner}</p>
  );
}
