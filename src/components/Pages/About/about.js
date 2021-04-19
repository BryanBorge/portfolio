import React from "react";
import classes from "./about.module.css";
import Button from "@material-ui/core/Button";

const about = () => {
  return (
    <div className={classes.about}>
      <p>
        Full stack developer with a lifelong fascination for technology. Fueled by a passion for creation and
        progression, I am eager to learn the latest technologies through continued coursework and professional
        development. Currently specializing in the MERN stack, I enjoy using React/React Native with Redux for state management along with Node/Express and MongoDB on
        the backend. I enjoy building web applications that utilize the most recent practices and tools. I
        also enjoy building{" "}
        <a href="https://www.wired.co.uk/article/internet-of-things-what-is-explained-iot" target="_blank">
          IoT
        </a>{" "}
        projects with Python and a Raspberry Pi.
      </p>
      <div className={classes.Resume}>
        <div className={classes.links}>
          <a
            href="https://www.linkedin.com/in/bryan-borgesano/"
            target="_blank"
            style={{textDecoration: "none"}}>
            <i className="fab fa-linkedin fa-4x"></i>
          </a>
        </div>
        <div className={classes.links}>
          <a href="https://github.com/BryanBorge" target="_blank" style={{textDecoration: "none"}}>
            <i className="fab fa-github-square fa-4x"></i>
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
