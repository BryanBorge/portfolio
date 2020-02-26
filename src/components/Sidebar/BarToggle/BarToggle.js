import React from "react";
import classes from "./BarToggle.module.css";
const barToggle = props => {
  return (
    <div className={classes.BarToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default barToggle;
