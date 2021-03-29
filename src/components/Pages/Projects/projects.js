import React from "react";
import Project from "./Project/project";
import rpi from "../../../assets/Icons/rpi.png";
import MaskiLogo from "../../../assets/Icons/mask-eye.png";
import reactLogo from "../../../assets/Icons/react.png";
import plant from "../../../assets/Icons/plant.png";
import pennAndTellerLogo from "../../../assets/Icons/pandt.jpg";
import devdojo from "../../../assets/Icons/devdojo.jpg";
import punkhub from "../../../assets/Icons/punkhub.jpg";
import classes from "./projects.module.css";

const projects = () => {
  return (
    <div className={classes.Projects}>
      <Project
        img={devdojo}
        title={"My Blog"}
        desc={
          "Just starting to write about solutions to problems I come across and other software/tech related things I find interesting or that may help other entry level developers. "
        }
        link={"https://devdojo.com/bryanborge"}
        icon="fas fa-code fa-1x"
        tip="Link to DevDojo Profile"
        stack={["DevDojo", "Development Blog"]}
      />
      <Project
        img={plant}
        title={"Plant Dashboard"}
        desc={
          "The main purpose of this web app is to monitor my plants environment at home and remotely. This is done by displaying the current and average temperature/humidity, a graph of readings for the day and a live camera stream."
        }
        link={"https://plant-dashboard.netlify.app/"}
        link2={"https://github.com/Plant-Dashboard"}
        icon="fas fa-code fa-1x"
        icon2="fab fa-github-square fa-2x"
        tip="Link to Plant Dashboard homepage"
        tip2="Link to GitHub"
        stack={[
          "React",
          "Redux/Redux-Thunk",
          "MaterialUI",
          "Node",
          "Express",
          "REST API",
          "IoT",
          "Raspberry Pi",
          "Python",
          "MongoDB",
          "Heroku",
          "Netlify",
        ]}
      />
      <Project
        img={punkhub}
        title={"Punk Hub Live"}
        desc={"Punk	Hub	Live is a	socially interactive live	streaming	platform that is currently in development."}
        link={"https://www.manickatrecords.com/"}
        icon="fas fa-code fa-1x"
        tip="Link to Manic Kat Records"
        stack={[
          "React Native",
          "Expo",
          "Redux/Redux-Thunk",
          "Node",
          "Express",
          "MongoDB",
          "REST API",
          "Heroku",
          "Google Cloud",
        ]}
      />
      <Project
        img={pennAndTellerLogo}
        title={"Penn and Teller: Bullshit Downloader"}
        desc={
          "I found a site that contains every episode of Penn & Teller's Bullshit. Instead downloading each episode one by one I wrote a  Python script to do it for me. Using Selenium, BeautifulSoup and urllib, this is the solution I came up with."
        }
        link={"https://github.com/BryanBorge/bullshit-downloader"}
        icon="fab fa-github-square fa-2x"
        tip="Link to GitHub"
        stack={["Python", "BeautifulSoup", "urllib", "Selenium", "Web Scraping"]}
      />
      <Project
        img={MaskiLogo}
        title={"Mask-i"}
        desc={
          "Using deep-learning to distinguish if a person entering a designated area is wearing a mask or not. Group project for a Hackathon in June 2020. DevPost and GitHub linked below."
        }
        link={"https://devpost.com/software/mask-i"}
        link2={"https://github.com/mask-i"}
        icon="fas fa-code fa-1x"
        icon2="fab fa-github-square fa-2x"
        tip="Link to DevPost"
        tip2="Link to GitHub"
        stack={["React", "RaspberryPi", "IoT", "Python", "Hackathon", "Machine Learning", "MaterialUI"]}
      />
    </div>
  );
};

export default projects;
