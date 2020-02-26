import React from "react";
import classes from "./skill.module.css";
const skill = (props) => {
  return (
      <div class={classes.flipcard}>
        <div class={classes.flipcardinner}>
          <div class={classes.flipcardfront}>
              <img src={props.skill} height="105px" width="105px" alt={props.skill}/>
          </div>
          <div class={classes.flipcardback}>
              <p>{props.info}</p>
          </div>
        </div>
      </div> 
  );
};

export default skill;
