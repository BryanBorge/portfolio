import React from "react";
import classes from "./contacts.module.css";
const contacts = () => {
  return (
    <div className={classes.Contacts}>
      <a href="https://docs.google.com/document/d/1uw6tut4270osFizxSfcC9KS5jC5EYdGptpYSqZ1Hm5g/edit">
      <i class="fab fa-google-drive fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/bryan-borgesano/">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/BryanBorge">
        <i class="fab fa-github-square fa-2x"></i>
      </a>
    </div>
  );
};

export default contacts;
