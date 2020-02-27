import React from "react";
import Skill from "./Skill/skill";
import csharpLogo from "../../../assets/Icons/csharp.png";
import cppLogo from "../../../assets/Icons/cpp.png"
import gitLogo from "../../../assets/Icons/git.png";
import javaLogo from "../../../assets/Icons/java.png";
import reactLogo from "../../../assets/Icons/react.png";
import sqlLogo from "../../../assets/Icons/sql.png";
import htmlLogo from "../../../assets/Icons/html.png";
import pyLogo from "../../../assets/Icons/py.png";
import linuxLogo from "../../../assets/Icons/linux.png";
import classes from "./skills.module.css";

const skillInfo = {
  csharp: "Used C# to write DLLs for use in WPF applications and wrote programs that utilize web services and multithreading. Database experience using Azure for a personal project.",
  cpp: "Used C++ to build data structures dealing with low level memory management. Also used for my algorithms class where I learned time/space complexity, sorting/searching and tree/graph algorithms.",
  git:
    "Familar with basic Git commands such as add, commit, status, checkout, push, pull. Use Git/Github for my personal projects.",
  java:
    "Took a course at Farmingdale covering things such Object Oriented design and principles, GUIs, interfaces and error handing. Used Java to build a desktop app for our senior project using JDBC and Azure.",
  python:
    "My current go to language. Most of my experience is from scripting on a RaspberryPi. I've used Python for projects involving web scraping, APIs, reading sensors and managing the file system on my computer",
  react:
    "Currently enrolled in a 40 hour React JS course on Udemy. This site is the first thing I've build with React using hooks.",
  sql:
    "Took two courses on SQL at SUNY Farmingdale using Oracle and SQl Server focusing on DML statements. Have sinced used Azure for school projects using Java and personal projects using C#.",
  linux:
    "First introduced during my Unix course at SUNY Farmingdale. Have experience scripting and building projects with a RaspberryPi. Recently installed Ubuntu on my main computer and use it for most of my development.",
  html:
    "HTML, CSS and web design were not my strongest skills. After being introduced to React JS, my skills and enjoyment of doing web development has greatly improved."
};

const skills = () => {
  return (
    <div>
      <div className={classes.Skills}>
        <Skill skill={csharpLogo} info={skillInfo.csharp} />
        <Skill skill={cppLogo} info={skillInfo.cpp} />
        <Skill skill={gitLogo} info={skillInfo.git} />
        <Skill skill={javaLogo} info={skillInfo.java} />
        <Skill skill={pyLogo} info={skillInfo.python} />
        <Skill skill={reactLogo} info={skillInfo.react} />
        <Skill skill={sqlLogo} info={skillInfo.sql} />
        <Skill skill={linuxLogo} info={skillInfo.linux} />
        <Skill skill={htmlLogo} info={skillInfo.html} />
      </div>
    </div>
  );
};

export default skills;
