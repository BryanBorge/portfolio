import React from "react";
import classes from "./contacts.module.css";
const contacts = () => {
  return (
    <div className={classes.Contacts}>
      <a href="https://github.com/BryanBorge">
        <i class="fab fa-github-square fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/bryan-borgesano/">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="BryanBorgesano97@gmail.com">
        <i class="fas fa-envelope-square fa-2x"></i>
      </a>
    </div>
  );
};

export default contacts;
