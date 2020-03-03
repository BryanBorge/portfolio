import React from "react";
import classes from "./about.module.css";

const about = () => {
  return (
    <div className={classes.about}>
      <p>
        I'm drawn to challenges that require creativity and constant
        progression. I believe my passion for progression comes from
        skateboarding - endless learning and the desire to be better than you
        were yesterday.
      </p>
      <p>
        After I began to study computer science in college, I realized that
        programming had a similar mentality and pleasure. I want to take my
        passion for learning and progression and apply my skills as a software
        developer. I'm not sure where I would like to specialize which is why im
        looking to get my foot in the door and start my career.
      </p>
      <p className={classes.focus}>
        Current Focus:{" "}
        <a href="https://github.com/BryanBorge?utf8=%E2%9C%93&tab=repositories&q=&type=&language=python">
          Python
        </a>{" "}
        -{" "}
        <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
          React
        </a>
      </p>
      <p>
        This site was developed by me and shows some of my background. Welcome!
      </p>
    </div>
  );
};

export default about;
