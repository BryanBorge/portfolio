import React from "react";
import classes from "./about.module.css";

const about = () => {
  return (
    <div className={classes.about}>
      <p>
        Aspiring full stack developer with a life long fascination for
        technology. Fueled by a passion for creation and progression, I am eager
        to learn the latest technologies through continued coursework and
        professional development.
        I have experience building backend services while studying at SUNY
        Farmingdale and recently completed an online course where I learned
        ReactJS.
      </p>
      <p>
        Actively looking for a position as an Entry Level Developer and always
        interested in a challenge.
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
