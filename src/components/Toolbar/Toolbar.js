import React from "react";
import Logo from '../Logo/logo'
import Navigation from "../Navigation/Navigation";
import BarToggle from '../Sidebar/BarToggle/BarToggle'
import classes from "./Toolbar.module.css";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <BarToggle clicked={props.barToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <div className={classes.DesktopOnly}>
      <Navigation />
    </div>
  </header>
);

export default toolbar;
