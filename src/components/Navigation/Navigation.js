import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";

const navigation = () => {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem to="About">
        About
      </NavigationItem>
      <NavigationItem to="Education">
        Education
      </NavigationItem>
      <NavigationItem to="Experience">
        Experience
      </NavigationItem>
      <NavigationItem to="Skills">
        Skills
      </NavigationItem>
      <NavigationItem to="Projects">
        Projects
      </NavigationItem>
      <NavigationItem to="Resume">
          Resume
      </NavigationItem>
    </ul>
  );
};

export default navigation;
