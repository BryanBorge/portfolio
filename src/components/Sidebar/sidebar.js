import React from "react";
import Logo from "../Logo/logo";
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
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <Navigation />
      </div>
    </Aux>
  );
};

export default sidebar;
