import React from "react";
import Job from "./Job/job";
import PrecipartLogo from "../../../assets/Icons/precipart.png";
import RmsLogo from "../../../assets/Icons/rms.jpeg";
import MKRLogo from "../../../assets/Icons/MKR_Logo.png";
import classes from "./experience.module.css";

let mkrItems = [
  "Leading the development of a React Native application using the Expo framework",
  "Utilizing Redux and Redux-Thunk for state management",
  "Set up and maintain MongoDB database",
  "Developed and implemented REST API with Node/Express",
  "Deployed API using GitHub and Heroku",
  "Implemented authentication with JWT",
  "Implemented account verification and password reset",
  "Utilized Google Cloud Storage for image hosting",
  "Enabled payments using Expo and the Stripe API",
  "Set up custom push notifications",
];
let mkrTime = "Sept 2020 - Current | Remote";

let precipartItems = [
  "Supported the company in a Global migration to an upgraded ERP solution ",
  "Expedited the migration of users from Office 2010 to Office 365 and provided training",
  "Demonstrated strength in diagnosing, troubleshooting and solving user’s hardware and software issues",
];
let preipartTime = "Feb 2019 - April 2019 | Farmingdale, NY";

let rmsItems = [
  "Oversee daily operations for an ice rink inside of an 800,000 square-foot outdoor mall",
  "Ensured the safety and enjoyment of skaters on and off the ice",
  "Head of ice maintenance and Zamboni operation",
];
let rmsTime = "Jan 2018 - March 2020 | Deer Park, NY";

const experience = () => {
  return (
    <div className={classes.exp}>
      <Job
        logo={MKRLogo}
        company="Manic Kat Records"
        link="http://www.manickatrecords.com"
        companyTip="Link to Manickatrecords.com"
        title="Application Developer"
        desc="New York based independent record label bringing you the best up and coming Pop Punk, Hardcore, Punk, Post-Hardcore, Ska, Emo, Metal, and Alternative artists."
        items={mkrItems}
        time={mkrTime}
      />
      <Job
        logo={PrecipartLogo}
        company="Precipart"
        link="http://www.precipart.com"
        companyTip="Link to Precipart.com"
        title="Digital Solutions Intern"
        desc="Precipart designs and manufactures high precision custom gears and mechanical components for the Medical Technology, Aerospace and Industrial sectors."
        items={precipartItems}
        time={preipartTime}
      />
      <Job
        logo={RmsLogo}
        company="Rink Management Services"
        companyTip="Link to RinkManagement.com"
        link="https://www.rinkmanagement.com/"
        desc="Rink Management Services is the largest operator of ice skating facilities in the U.S. and the only company with a national footprint"
        title="Assistant Manager - Tanger Outlets"
        titleTip="Link to Tanger Outles Ice Rink"
        secondLink="https://www.tangericerink.com/"
        items={rmsItems}
        time={rmsTime}
      />
    </div>
  );
};

export default experience;
