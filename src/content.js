import React from "react";
import Experience from "./components/Pages/Experience/experience";
import Education from "./components/Pages/Education/education";
import Header from "./components/Header/header";
import About from "./components/Pages/About/about";
import Skills from "./components/Pages/Skills/skills";
import Resume from "./components/Pages/Resume/resume";
import Projects from "./components/Pages/Projects/projects";
import classes from "./content.module.css";

const lastUpdated = new Date("Thu Feb 25 2021 15:04:28").toLocaleString("en-US");

const content = () => {
  return (
    <div className={classes.maincontent}>
      <Header title="About" id="About" />
      <About />
      <Header title="Education" id="Education" />
      <Education />
      <Header title="Experience" id="Experience" />
      <Experience />
      <Header title="Skills" id="Skills" />
      <Skills />
      <Header title="Projects" id="Projects" />
      <Projects />
      <Header title="Resume" id="Resume" />
      <Resume />
      <p className={classes.updatedAt}>Last updated: {lastUpdated} </p>
    </div>
  );
};

export default content;
