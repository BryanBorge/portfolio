import React, { useState } from "react";
import Experience from "./components/Pages/Experience/experience";
import Education from "./components/Pages/Education/education";
import Header from "./components/Header/header";
import About from "./components/Pages/About/about";
import Skills from "./components/Pages/Skills/skills";
import Projects from "./components/Pages/Projects/projects";
import classes from "./content.module.css";
import Footer from "./components/Footer/Footer";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "@material-ui/core/Snackbar";

const Content = props => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRedirectToNewSite = () => {
    window.location.href = "https://www.bryanb.app/";
  };

  return (
    <div className={classes.maincontent}>
      <Snackbar
        anchorOrigin={{
          vertical: 'top', horizontal: 'center'
        }}
        open={!open}
        message="You should check out my updated site."
        action={
          <Button
            style={{ color: "white", textDecoration: "underline" }}
            size="small"
            onClick={handleRedirectToNewSite}>
            Take me there
          </Button>
        }
      />

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
      <Footer />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ATTENTION</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This site is outdated. You can stay here if you'd like but I have a new, updated website you
            should check out.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Stay here</Button>
          <Button onClick={handleRedirectToNewSite}>Go to new site</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Content;
