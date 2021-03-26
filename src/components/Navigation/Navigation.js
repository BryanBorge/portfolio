import React, {useState} from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem to="About">About</NavigationItem>
      <NavigationItem to="Education">Education</NavigationItem>
      <NavigationItem to="Experience">Experience</NavigationItem>
      <NavigationItem to="Skills">Skills</NavigationItem>
      <NavigationItem to="Projects">Projects</NavigationItem>
    </ul>
  );
};

export default Navigation;
