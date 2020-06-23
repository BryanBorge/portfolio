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
          "You are already here! This site is the first thing I've built using ReactJS and it's being hosted on GitHub pages."
        }
        link={"https://github.com/BryanBorge/portfolio"}
        icon="fab fa-github-square fa-2x"
      />
      <Project
        img={MaskiLogo}
        title={"Mask-i"}
        desc={
          "Using deep-learning to distinguish if a person entering a designated area is wearing a mask. If so keep the door unlocked, if not lock the door. This will help enforce new face mask policies. Group project for a Hackathon in June 2020. DevPost and GitHub linked below."
        }
        link={"https://devpost.com/software/mask-i"}
        link2={"https://github.com/mask-i"}
        icon="fas fa-code fa-1x"
        icon2="fab fa-github-square fa-2x"
      />
      <Project
        img={FarFriendsLogo}
        title={"Far Friends"}
        desc={
          "We've created an application where users from around the world can connect and socialize while remaining socially distant. You can monitor COVID in each country with our live map. Group project for a Hackton in May 2020. DevPost linked below."
        }
        link={"https://devpost.com/software/far-friends"}
        link2={"https://github.com/BryanBorge/ru-hack"}
        icon="fas fa-code fa-1x"
        icon2="fab fa-github-square fa-2x"
      />
      <Project
        img={rpi}
        title={"Remote Temperature Monitor"}
        desc={
          "Python script to monitor real time temperature and humidity remotely using a RaspberryPi with a web dashboard. My RaspberryPi was repurposed for other projects so the dashboard is now offline."
        }
        link={"https://github.com/BryanBorge/temperature-monitor"}
        icon="fab fa-github-square fa-2x"
      />
    </div>
  );
};

export default projects;
