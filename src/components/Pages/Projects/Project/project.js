import React from "react";

import classes from "./project.module.css";
const project = props => {
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
            <i className="fab fa-github-square fa-2x"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default project;
