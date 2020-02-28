import React from "react";
import {Link} from 'react-scroll'
import classes from "./NavigationItem.module.css";
const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <Link href={props.link} to={props.to} smooth={true}offset={-58} duration={1000}className={props.active ? classes.active : null}>
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;
