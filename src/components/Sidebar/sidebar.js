import React, { Component } from "react";
import Logo from "../Logo/logo";
import Button from "../Button/button";
import Contacts from "../Contacts/contacts";
import Navigation from '../Navigation/Navigation'
import Aux from "../../hoc/Aux";
import classes from "./sidebar.module.css";
import Backdrop from "../Backdrop/Backdrop";

const sidebar = props => {
  let attachedClasses = [classes.SideBar, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideBar, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={classes.Sidebar}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <Navigation />
      </div>
    </Aux>
  );
};

export default sidebar;
