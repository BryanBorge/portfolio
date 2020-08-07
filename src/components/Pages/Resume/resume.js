import React from "react";
import classes from "./resume.module.css";
import Tooltip from "@material-ui/core/Tooltip";

const resume = () => {
  return (
    <div className={classes.Resume}>
      <Tooltip title={"Link to resume on Google Docs"}>
        <a href='https://docs.google.com/document/d/1ZaOCL9HNV2RNFFeiTGApiCXvs2RKhgyno198-pxQPgQ/edit?usp=sharing'>
          <i className='fab fa-google-drive fa-4x'></i>
          <p>Resume</p>
        </a>
      </Tooltip>
      <a href='https://www.linkedin.com/in/bryan-borgesano/'>
        <i className='fab fa-linkedin fa-4x'></i>
        <p>LinkedIn</p>
      </a>{" "}
      <a href='https://github.com/BryanBorge'>
        <i className='fab fa-github-square fa-4x'></i>
        <p>GitHub</p>
      </a>{" "}
      <Tooltip title={"Link to DevPost profile"}>
        <a href='https://devpost.com/BryanBorge?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>
          <i className='fas fa-file-code fa-4x'></i>
          <p>DevPost</p>
        </a>
      </Tooltip>
    </div>
  );
};
export default resume;
