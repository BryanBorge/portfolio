import React from "react";
import Button from "../Button/button";
import Navigation from "../Navigation/Navigation";
import BarToggle from '../Sidebar/BarToggle/BarToggle'
import classes from "./Toolbar.module.css";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <BarToggle clicked={props.barToggleClicked}/>
    <div className={classes.DesktopOnly}>
      <Navigation />
    </div>
  </header>
);

export default toolbar;
