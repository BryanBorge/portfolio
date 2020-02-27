import React from "react";
import Experience from "./components/Pages/Experience/experience";
import Education from "./components/Pages/Education/education";
import Header from "./components/Header/header"
import About from "./components/Pages/About/about"
import Skills from './components/Pages/Skills/skills'
import classes from "./content.module.css";



const content = () => {
  return (
    <div className={classes.maincontent}>
      <Header title='About' id="About"/>
      <About />
      <Header title='Education' id="Education" />
      <Education />
      <Header title='Experience' id="Experience" />
      <Experience />
      <Header title='Skills' id="Skills"/>
      <Skills />
    </div>
  );
};

export default content;
