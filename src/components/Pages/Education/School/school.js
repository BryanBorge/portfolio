import React from "react";
import Header from "../../../Header/header";
import classes from "./school.module.css";
const school = props => {
  let listItems = props.items.map(item => <li key={item}>{item}</li>);
  let courses = props.courses.map(item => <li key={item}>{item}</li>);
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <a>
          <h4>{props.school}</h4>
        </a>
      </div>
      <div className={classes.hr}></div>
      <div className={classes.degree}>
        <h6>{props.desc}</h6>
      </div>
      <div className={classes.details}>
        <ul>{listItems}</ul>
      </div>
      <div className={classes.time}>
        <p>{props.time}</p>
      </div>
    </div>
  );
};

export default school;
