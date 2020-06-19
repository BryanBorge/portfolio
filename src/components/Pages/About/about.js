import React from "react";
import classes from "./about.module.css";

const about = () => {
  return (
    <div className={classes.about}>
      <p>
        Aspiring full stack developer with a life long fascination for
        technology. Fueled by a passion for creation and progression, I am eager
        to learn the latest technologies through continued coursework and
        professional development. I've had experience with Object-oriented
        programming languages (Java, C#, C++) while studying at SUNY Farmingdale
        and have began to learn full-stack web development with React and
        Node.js
      </p>
      <p>
        Actively looking for a position as an Entry Level Developer and always
        interested in a challenge.
      </p>
      <p className={classes.focus}>
        Current Focus:{" "}
        <a href="https://www.educative.io/edpresso/what-is-mern-stack">
          Full-stack development with the MERN stack.
        </a>
      </p>
      <p>
        This site was developed by me and shows some of my background. Welcome!
      </p>
    </div>
  );
};

export default about;
