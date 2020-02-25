import React from "react";
import classes from "./skill.module.css";
const skill = (props) => {
  return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
              <img src={props.skill} height="105px" width="105px" alt={props.skill}/>
          </div>
          <div class="flip-card-back">
              <p>{props.info}</p>
          </div>
        </div>
      </div> 
  );
};

export default skill;
