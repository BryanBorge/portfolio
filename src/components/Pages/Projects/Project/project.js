import React from "react";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import classes from "./project.module.css";

const project = props => {
  let listItems = props.stack.map(item => (
    <li key={item}>
      <Chip size="small" label={item} />
    </li>
  ));
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
      <div className={classes.Chip}>
        <ul>{listItems}</ul>
      </div>
      <div className={classes.BottomRow}>
        <Tooltip title={props.tip}>
          <a href={props.link} target="_blank">
            <div className={classes.Icon}>
              <i className={props.icon}></i>
            </div>
          </a>
        </Tooltip>
        <Tooltip title={props.tip2} placement="right-end">
          <a href={props.link2} target="_blank">
            <div className={classes.Icon2}>
              <i className={props.icon2}></i>
            </div>
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default project;
