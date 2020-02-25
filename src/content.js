import React from "react";
import Experience from "./components/Pages/Experience/experience";
import Education from "./components/Pages/Education/education";
import Header from "./components/Header/header"
import About from "./components/Pages/About/about"
import classes from "./content.css";



const content = () => {
  return (
    <div className="main-content">
      <Header title='About'/>
      <About />
      <Header title='Education' />
      <Education />
      <Header title='Experience' />
      <Experience />
    </div>
  );
};

export default content;
