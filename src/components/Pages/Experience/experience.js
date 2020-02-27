import React from "react";
import Job from "./Job/job";
import PrecipartLogo from "../../../assets/Icons/precipart.png";
import RmsLogo from "../../../assets/Icons/rms.jpeg";
import classes from "./experience.module.css";

let precipartItems = [
  "Supporting the company in a Global migration to an upgraded ERP solution",
  "Assisted in the rollout of Microsoft Office 365",
  "Assisted with Service Desk responsibilities to solve user’s hardware and software problems",
  "Promoting training efforts to educate staff on different applications"
];
let preipartTime = "Feb 2019 - April 2019 | Farmingdale, NY";

let rmsItems = [
  "Oversee daily operations for an ice rink inside of an 800,000 square-foot outdoor mall",
  "Maintained an accurate cash draw of average $1500 per shift",
  "Ensured the safety and enjoyment of skaters on and off the ice",
  "Head of ice maintenance and Zamboni operation"
];
let rmsTime = "Jan 2018 - March 2020 | Deer Park, NY";

const experience = () => {
  return (
    <div className={classes.exp}>
      <Job
        logo={PrecipartLogo}
        company="Precipart"
        link="http://www.precipart.com"
        title="Digital Solutions Intern"
        desc="Precipart designs and manufactures high precision custom gears and mechanical components for the Medical Technology, Aerospace and Industrial sectors."
        items={precipartItems}
        time={preipartTime}
      />
      <Job
        logo={RmsLogo}
        company="Rink Management Services"
        link="https://www.rinkmanagement.com/"
        desc="Rink Management Services is the largest operator of ice skating facilities in the U.S. and the only company with a national footprint"
        title="Assistant Manager - Tanger Outlets"
        secondLink="https://www.tangericerink.com/"
        items={rmsItems}
        time={rmsTime}
      />
    </div>
  );
};

export default experience;
