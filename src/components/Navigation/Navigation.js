import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem"
import classes from "./Navigation.module.css";

const navigation = () => {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem link="/" to="About">About</NavigationItem>
      <NavigationItem link="/" to="Education">Education</NavigationItem>
      <NavigationItem link="/" to="Experience">Experience</NavigationItem>
      <NavigationItem link="/" to="Skills">Skills</NavigationItem>
      <NavigationItem link="/" to="Projects">Projects</NavigationItem>
      <NavigationItem link="https://docs.google.com/document/d/1uw6tut4270osFizxSfcC9KS5jC5EYdGptpYSqZ1Hm5g/edit">Resume</NavigationItem>
    </ul>
  );
};

export default navigation;
