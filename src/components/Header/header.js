import React from "react";
import classes from "./header.module.css";

const header = props => {
  let hamburger = props.toggle ? <i class="fas fa-bars"></i> : null;
  
  return (
    <div className={classes.header} to={props.to} id={props.id}>
      {hamburger} {props.title}
    </div>
  );
};

export default header;
