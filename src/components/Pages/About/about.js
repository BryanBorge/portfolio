import React from "react";
import classes from "./about.module.css";

const about = () => {
  return (
    <div className={classes.about}>
      <p>
        Full stack developer with a life long fascination for technology. Fueled by a passion for
        creation and progression, I am eager to learn the latest technologies through continued
        coursework and professional development. I've had experience with Object-oriented
        programming languages (Java, C#, C++) while studying at SUNY Farmingdale and have current
        focus on full stack development with the MERN stack. (MongoDB, Express, React/React Native,
        Node.js)
      </p>
      <p className={classes.focus}></p>
      <p>This site was developed by me and shows some of my background. Welcome!</p>
    </div>
  );
};

export default about;
