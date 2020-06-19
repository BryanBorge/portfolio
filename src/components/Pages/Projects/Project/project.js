import React from "react";

import classes from "./project.module.css";
const project = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Image}>
        <img src={props.img} alt="bumble" />
      </div>
      <div className={classes.Title}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.Text}>
        <p>{props.desc}</p>
        <p> </p>
      </div>
      <div className={classes.BottomRow}>
        <a href={props.link}>
          <div className={classes.Icon}>
            <i className={props.icon}></i>
          </div>
        </a>
        <a href={props.link2}>
          <div className={classes.Icon2}>
            <i className={props.icon2}></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default project;
