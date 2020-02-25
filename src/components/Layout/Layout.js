import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import SideBar from "../Sidebar/sidebar";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";
class Layout extends Component {
  state = {
    showSideBar: true
  };

  sideBarClosedHandler = () => {
    this.setState({ showSideBar: false });
  };

  sideBarToggleHandler = () => {
    this.setState( (prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar barToggleClicked={this.sideBarToggleHandler}/>
        <SideBar
          open={this.state.showSideBar}
          closed={this.sideBarClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
