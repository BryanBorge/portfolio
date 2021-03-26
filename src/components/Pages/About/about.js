import React from "react";
import classes from "./about.module.css";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const about = () => {
  return (
    <div className={classes.about}>
      <p>
        Full stack developer with a life long fascination for technology. Fueled by a passion for creation and
        progression, I am eager to learn the latest technologies through continued coursework and professional
        development. I've had experience with Object-oriented programming languages (Java, C#, C++) while
        studying at SUNY Farmingdale and have a current focus on full stack development using the MERN stack.
        (MongoDB, Express, React/React Native, Node.js)
      </p>
      <p className={classes.focus}></p>
      <p>This site was developed by me and shows some of my background. Welcome!</p>
      <div className={classes.Resume}>
        <div className={classes.links}>
          <a
            href="https://www.linkedin.com/in/bryan-borgesano/"
            target="_blank"
            style={{textDecoration: "none"}}>
            <i className="fab fa-linkedin fa-4x"></i>
            <p style={{fontSize: "12px"}}>LinkedIn</p>
          </a>
        </div>
        <div className={classes.links}>
          <a href="https://github.com/BryanBorge" target="_blank" style={{textDecoration: "none"}}>
            <i className="fab fa-github-square fa-4x"></i>
            <p style={{fontSize: "12px"}}>GitHub</p>
          </a>
        </div>
      </div>
      <div className={classes.request}>
        <Button variant="contained" onClick={event => window.open("https://forms.gle/nUWfSfaYFtQjbxbu8")}>
          Requst Resume
        </Button>
      </div>
    </div>
  );
};

export default about;
