import React from "react";
import classes from "./button.module.css";

const pageNames = {
  About: "fas fa-user",
  Education: "fas fa-user-graduate",
  Skills: "fas fa-laptop-code",
  Projects: "far fa-window-maximize",
  Resume: "fas fa-file",
  Experience: "fas fa-chart-line",
  Default: "fas fa-times"
};

const chooseIcon = pageName => {
  let currentIcon = undefined;
  switch (pageName) {
    case "About":
      currentIcon = pageNames.About;
      break;
    case "Education":
      currentIcon = pageNames.Education;
      break;
    case "Skills":
      currentIcon = pageNames.Skills;
      break;
    case "Projects":
      currentIcon = pageNames.Projects;
      break;
    case "Resume":
      currentIcon = pageNames.Resume;
      break;
    case "Experience":
      currentIcon = pageNames.Experience;
      break;
    default:
      currentIcon = pageNames.Default;
  }
  return currentIcon;
};

const button = props => {
  return (
    <button className={classes.Button}>
      <i class={chooseIcon(props.text)}></i>
      {props.text}
    </button>
  );
};

export default button;
