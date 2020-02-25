import React from "react";
import Header from "../../Header/header";
import classes from "./about.module.css";

const about = () => {
  return (
    <div className={classes.about}>
      <p>
        Im drawn to challanges that require creativity and constant progression.
        I believe my passion for progression comes from skateboarding - endless learning and the
        desire to be better than you were yesterday.
      </p>
      <p>
        After I began to study computer science in college I realized that
        programming had a similar mentality and pleasure. I want to take my
        passion for learning and progression and apply my skills as a software
        developer. Im not sure where I would like to specalize which is why im
        looking to get my foot in the door.
      </p>
      <p>
        This site was developed by me and shows some of my background. Welcome!
      </p>
    </div>
  );
};

export default about;
