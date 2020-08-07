import React from "react";
import Project from "./Project/project";
import rpi from "../../../assets/Icons/rpi.png";
import FarFriendsLogo from "../../../assets/Icons/farfriends.jpg";
import MaskiLogo from "../../../assets/Icons/mask-eye.png";
import reactLogo from "../../../assets/Icons/react.png";
import classes from "./projects.module.css";
const projects = () => {
  return (
    <div className={classes.Projects}>
      <Project
        img={reactLogo}
        title={"Portfolio Website"}
        desc={
          "You are already here! This site is the first thing I've built using ReactJS, using some components from MaterialUI. Being hosted on GitHub pages."
        }
        link={"https://github.com/BryanBorge/portfolio"}
        icon='fab fa-github-square fa-2x'
        tip='Link to GitHub'
        stack={["React", "CSS", "MaterialUI"]}
      />
      <Project
        img={MaskiLogo}
        title={"Mask-i"}
        desc={
          "Using deep-learning to distinguish if a person entering a designated area is wearing a mask. If so keep the door unlocked, if not lock the door. This will help enforce new face mask policies. Group project for a Hackathon in June 2020. DevPost and GitHub linked below."
        }
        link={"https://devpost.com/software/mask-i"}
        link2={"https://github.com/mask-i"}
        icon='fas fa-code fa-1x'
        icon2='fab fa-github-square fa-2x'
        tip='Link to DevPost'
        tip2='Link to GitHub'
        stack={[
          "React",
          "RaspberryPi",
          "IoT",
          "Python",
          "Hackathon",
          "Machine Learning",
        ]}
      />
      <Project
        img={rpi}
        title={"Remote Temperature Monitor"}
        desc={
          "Web dashboard that uses data from RaspberryPi to monitor live temperature and humidity data."
        }
        link={"https://github.com/BryanBorge/temperature-monitor"}
        icon='fab fa-github-square fa-2x'
        tip='Link to GitHub'
        stack={["Python", "RaspberryPi", "IoT", "Google APIs"]}
      />
    </div>
  );
};

export default projects;
