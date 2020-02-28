import React from 'react' 
import classes from './resume.module.css'
const resume = () => {
    return (
        <div className={classes.Resume}>
         <a href="https://docs.google.com/document/d/1uw6tut4270osFizxSfcC9KS5jC5EYdGptpYSqZ1Hm5g/edit">
            <i class="fas fa-file-alt fa-4x"></i>
            Resume
          </a>
          <a href="https://www.linkedin.com/in/bryan-borgesano/">
            <i class="fab fa-linkedin fa-4x"></i>
            Linked In
          </a>
          <a href="https://github.com/BryanBorge">
            <i class="fab fa-github-square fa-4x"></i>
            GitHub
          </a>
        </div>
      );
    };
export default resume