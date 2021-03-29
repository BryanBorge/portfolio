import React from "react";
import classes from "./footer.module.css";

const Footer = props => {
  const lastUpdated = new Date("Mon Mar 29 2021 11:39:27").toLocaleString("en-US");

  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        <a href="https://www.linkedin.com/in/bryan-borgesano/" target="_blank" style={{margin: "0 15px"}}>
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/BryanBorge" target="_blank">
          <i className="fab fa-github-square fa-2x" style={{margin: "0 15px"}}></i>
        </a>
      </div>
      <div>
        <p className={classes.updatedAt}>Copyright © 2021 | Bryan Borgesano</p>
      </div>
      <div>
        <p className={classes.updatedAt}>Last updated: {lastUpdated} </p>
      </div>
    </footer>
  );
};

export default Footer;
