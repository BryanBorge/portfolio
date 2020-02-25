import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem"
import classes from "./Navigation.module.css";
const navigation = () => {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem link="/" >About</NavigationItem>
      <NavigationItem link="/">Education</NavigationItem>
      <NavigationItem link="/">Experience</NavigationItem>
      <NavigationItem link="/">Skills</NavigationItem>
      <NavigationItem link="/">Projects</NavigationItem>
      <NavigationItem link="/">Resume</NavigationItem>
    </ul>
  );
};

export default navigation;
