import React from 'react' 
import classes from './resume.module.css'
const resume = () => {
    return (
        <div className={classes.Resume}>
         <a href="https://docs.google.com/document/d/1uw6tut4270osFizxSfcC9KS5jC5EYdGptpYSqZ1Hm5g/edit">
         <i className="fab fa-google-drive fa-4x"></i>
         <p>Resume</p>
          </a>
          <a href="https://www.linkedin.com/in/bryan-borgesano/">
            <i className="fab fa-linkedin fa-4x"></i>
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/BryanBorge">
            <i className="fab fa-github-square fa-4x"></i>
            <p>GitHub</p>
          </a>
        </div>
      );
    };
export default resume