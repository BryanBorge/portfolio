import React from "react";
import Project from "./Project/project";
import rpi from "../../../assets/Icons/rpi.png";
import MaskiLogo from "../../../assets/Icons/mask-eye.png";
import reactLogo from "../../../assets/Icons/react.png";
import pennAndTellerLogo from "../../../assets/Icons/pandt.jpg";
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
        icon="fab fa-github-square fa-2x"
        tip="Link to GitHub"
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
        icon="fas fa-code fa-1x"
        icon2="fab fa-github-square fa-2x"
        tip="Link to DevPost"
        tip2="Link to GitHub"
        stack={["React", "RaspberryPi", "IoT", "Python", "Hackathon", "Machine Learning", "MaterialUI"]}
      />
      <Project
        img={pennAndTellerLogo}
        title={"Penn and Teller: Bullshit Downloader"}
        desc={
          "I found a site that contains every episode of Penn & Teller's Bullshit. Instead downloading each episode one by one I wrote a  Python script to do it for me. Using Selenium, BeautifulSoup and urllib, this is the solution I came up with."
        }
        link={"https://github.com/BryanBorge/bullshit-downloader"}
        icon="fab fa-github-square fa-2x"
        tip="Link to GitHub"
        stack={["Python", "BeautifulSoup", "urllib", "Selenium", "Web Scraping"]}
      />
      <Project
        img={rpi}
        title={"Remote Temperature Monitor"}
        desc={
          "Web dashboard to display live data from a RaspberryPi. Sensor data is read from the pi at regular intervals and sent to a Firebase real time database. The dashboard then updates for real time data visualization."
        }
        link={"https://github.com/tent-dashboard"}
        icon="fab fa-github-square fa-2x"
        tip="Link to GitHub"
        stack={["Python", "RaspberryPi", "IoT", "Firebase", "React", "Redux", "MaterialUI"]}
      />
    </div>
  );
};

export default projects;
