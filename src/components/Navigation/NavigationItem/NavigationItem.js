import React, { useState } from "react";
import { Link } from "react-scroll";
import classes from "./NavigationItem.module.css";
const NavigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <Link
        href={props.link}
        to={props.to}
        exact={true}
        smooth={true}
        offset={-58}
        duration={300}
        className={props.active ? classes.active : null}>
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;
