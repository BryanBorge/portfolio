import React from "react";
import classes from "./contacts.module.css";
const contacts = () => {
  return (
    <div className={classes.Contacts}>
      <a href="https://docs.google.com/document/d/1uw6tut4270osFizxSfcC9KS5jC5EYdGptpYSqZ1Hm5g/edit">
      <i className="fab fa-google-drive fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/bryan-borgesano/">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/BryanBorge">
        <i className="fab fa-github-square fa-2x"></i>
      </a>
    </div>
  );
};

export default contacts;
