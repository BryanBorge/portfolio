import React from "react";
import Skill from "./Skill/skill";
import csharpLogo from "../../../assets/Icons/csharp.png";
import cppLogo from "../../../assets/Icons/cpp.png";
import gitLogo from "../../../assets/Icons/git.png";
import javaLogo from "../../../assets/Icons/java.png";
import reactLogo from "../../../assets/Icons/react.png";
import sqlLogo from "../../../assets/Icons/sql.png";
import pyLogo from "../../../assets/Icons/py.png";
import linuxLogo from "../../../assets/Icons/linux.png";
import nodeLogo from "../../../assets/Icons/node.png";
import mongoLogo from "../../../assets/Icons/mongo.png";
import reduxLogo from "../../../assets/Icons/redux.png";
import classes from "./skills.module.css";

const skillInfo = {
  csharp:
    "Used C# to write DLLs for use in WPF applications that utilize web services and multithreading. Experience using Azure database for personal projects.",
  cpp:
    "Used C++ to build and learn data structures. Also used for my algorithms class where I learned time/space complexity, sorting/searching and tree/graph algorithms.",
  git:
    "Proficient with Git version control. Use Git/Github for all Hackathons, personal and professional projects.",
  java:
    "Took an undergrad course covering things like Object Oriented design and principles, GUIs, interfaces and error handing. Used Java to build a desktop app using JavaFX, JDBC and Azure.",
  python:
    "Most of my experience is from scripting on a RaspberryPi. I've used Python for web scraping, accessing APIs, reading sensor data and managing the file system on my computer",
  react:
    "Completed two 45 hour Udemy courses on React and React Native. One year of experience designing user friendly, mobile-first responsive web applications using MaterialUI as a design library. Using React Native for current mobile app development. ",
  sql: "Took two undergrad SQL courses using Oracle and SQL Server focusing on DML statements.",
  linux:
    "Took an undergrad Unix course. Mainly used for building projects with a RaspberryPi. Have some experience using Ubuntu for development",
  node:
    "Completed a Udemy course covering extensive backend design using NodeJS and express. Have since built numerous restful APIs implementing user authentication with JWT.",
  mongo:
    "Completed a Udemy course on MongoDB and have been using it for all API development in Node. Familiar with CRUD operations, filtering data and relating data using refrences and embedding.",
  redux:
    "Experience setting up a Redux store containing multiple reducers, dispatching actions and writing immutable reducer functions to update state. Familar using Redux-Thunk for asynchronous actions when utilizing APIs and web services. ",
};

const skills = () => {
  return (
    <div>
      <div className={classes.Skills}>
        <Skill skill={reactLogo} info={skillInfo.react} />
        <Skill skill={reduxLogo} info={skillInfo.redux} />
        <Skill skill={nodeLogo} info={skillInfo.node} />
        <Skill skill={gitLogo} info={skillInfo.git} />
        <Skill skill={mongoLogo} info={skillInfo.mongo} />
        <Skill skill={pyLogo} info={skillInfo.python} />
        <Skill skill={csharpLogo} info={skillInfo.csharp} />
        <Skill skill={cppLogo} info={skillInfo.cpp} />
        <Skill skill={javaLogo} info={skillInfo.java} />
        <Skill skill={sqlLogo} info={skillInfo.sql} />
        <Skill skill={linuxLogo} info={skillInfo.linux} />
      </div>
    </div>
  );
};

export default skills;
