import React from "react";
import classes from "./job.module.css";
import Tooltip from "@material-ui/core/Tooltip";

const job = props => {
  let listItems = props.items.map(item => (
    <li className={classes.items} key={item}>
      {item}
    </li>
  ));
  return (
    <div>
      <div className={classes.infocard}>
        <div className={classes.title}>
          <img className={classes.Logo} src={props.logo} alt="logo" />

          <Tooltip title={props.companyTip}>
            <a href={props.link}>
              <h1>{props.company}</h1>
            </a>
          </Tooltip>
          {props.titleTip ? (
            <Tooltip title={props.titleTip}>
              <a href={props.secondLink}>
                <p>{props.title}</p>
              </a>
            </Tooltip>
          ) : (
            <a href={props.secondLink}>
              <p>{props.title}</p>
            </a>
          )}
        </div>
        <div className={classes.titlehr} />
        <div className={classes.desc}>{props.desc}</div>
        <div>
          <ul className={classes.listItem}>{listItems}</ul>
        </div>
        <div className={classes.time}>
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
};

export default job;
