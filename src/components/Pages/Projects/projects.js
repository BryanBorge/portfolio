import React from "react";
import Project from "./Project/project";
import bumble from "../../../assets/Icons/bumble.jpg";
import dfmanager from "../../../assets/Icons/dfmanager.png";
import tictac from "../../../assets/Icons/tictac.png";
import rpi from "../../../assets/Icons/rpi.png";
import journal from "../../../assets/Icons/journal.jpg";
import dale from "../../../assets/Icons/dale.jpeg";
import reactLogo from "../../../assets/Icons/react.png";
import classes from "./projects.module.css";
const projects = () => {
  return (
    <div className={classes.Projects}>
      <Project
        img={reactLogo}
        title={"Portfolio Website"}
        desc={
          "You are already here! This site is the first thing I've built using ReactJS. This app was created using create-react-app and is hosted on GitHub Pages."
        }
        link={"https://github.com/BryanBorge/portfolio"}
      />
      <Project
        img={bumble}
        title={"Bumble Web Bot"}
        desc={
          "Using the webbot Python3 library, I built a webbot for the dating app Bumble. Still a work in progress and has open source commits."
        }
        link={"https://github.com/BryanBorge/bumble-webbot"}
      />
      <Project
        img={rpi}
        title={"Remote Temperature Monitor"}
        desc={
          "Python script to monitor temp and rH remotely. Data from the RaspberryPi goes to Dweet.io then that data is read by Freeboard.io and is displayed in real time. The rPi is also wired up to a LCD display which shows current and min/max values."
        }
        link={"https://github.com/BryanBorge/temperature-monitor"}
      />
      <Project
        img={journal}
        title={"Surf Log Storage"}
        desc={
          "WPF application used to save information from personal surf sessions to a database. This is used for data entry. I will use this data on another project in the near future."
        }
        link={"https://github.com/BryanBorge/WPF-Surf-Report"}
      />
      <Project
        img={dfmanager}
        title={"Downloads Manager"}
        desc={
          "Python program used to read file types in downloads folder and put them where they belong."
        }
        link={"https://github.com/BryanBorge/python-download-manager"}
      />
      <Project
        img={tictac}
        title={"Python Tic-Tac-Toe"}
        desc={"Console based Tic-Tac-Toe that is just about unbeatable"}
        link={"https://github.com/BryanBorge/tictactoe-python"}
      />

      <Project
        img={dale}
        title={"Senior Project 2019"}
        desc={
          "Course Objective: Develop an information system that includes analysis, design planning and organization of a real life or simulated situation. My group chose to develop a Java application to manage video game tournaments."
        }
        link={"https://github.com/BryanBorge/TopGamer"}
      />
    </div>
  );
};

export default projects;
