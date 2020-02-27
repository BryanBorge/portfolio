import React from "react";
import classes from "./job.module.css";
const job = props => {
  let listItems = props.items.map(item => <li key={item}>{item}</li>);
  return (
    <div>
      <div className={classes.infocard}>
        <div className={classes.title}>
          <a href={props.link}>
            <h1>{props.company}</h1>
          </a>
          <a href={props.secondLink}>
            <p>{props.title}</p>
          </a>
        </div>
        <div className={classes.titlehr} />
        <div className={classes.desc}>{props.desc}</div>
        <div className={classes.items}>
          <ol>{listItems}</ol>
        </div>
        <div className={classes.time}>
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
};

export default job;
