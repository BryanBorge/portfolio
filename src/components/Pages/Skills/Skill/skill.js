import React from "react";
import classes from "./skill.module.css";
const skill = (props) => {
  return (
      <div className={classes.flipcard}>
        <div className={classes.flipcardinner}>
          <div className={classes.flipcardfront}>
              <img src={props.skill} height="105px" width="105px" alt={props.skill}/>
          </div>
          <div className={classes.flipcardback}>
              <p>{props.info}</p>
          </div>
        </div>
      </div> 
  );
};

export default skill;
