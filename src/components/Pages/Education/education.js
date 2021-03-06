import React from "react";
import School from "./School/school";
import FarmingdaleLogo from "../../../assets/Icons/farmingdale.png";
import daleLogo from "../../../assets/Icons/dale.jpg";
import postLogo from "../../../assets/Icons/liu.png";
import LIULogo from "../../../assets/Icons/LIUPost.png";
import classes from "./education.module.css";

let farmingdaleItems = ["GPA 3.32/4", "Dean's List Fall 2017, Spring 2018"];

let farmingdaleCourses = [
  "Data Structures and Algorithms",
  "Programming in SQL",
  "Java/C# programming",
  "Unix operation systems",
  "Management information systems",
];

let postItems = ["GPA 3.29/4", "Phi Eta Sigma Honor Society", "Dean's List Fall 2015, Spring 2016"];

let postCourses = [
  "Computer Architecture and OS",
  "Systems Analysis and Design",
  "Networking and Information Technology",
  "Intro to game design",
];

const education = () => {
  return (
    <div className={classes.school}>
      <School
        link='https://www.farmingdale.edu/'
        tip='Link to Farmingdale.edu'
        logo={daleLogo}
        school='SUNY Farmingdale'
        desc='B.S. in Computer Programming and Information Systems'
        time='Fall 2017 - Spring 2019 | Farmingdale, Long Island'
        items={farmingdaleItems}
        courses={farmingdaleCourses}
      />
      <School
        link='https://liu.edu/Post'
        tip='Link to Liu.edu/Post'
        logo={LIULogo}
        school='LIU Post'
        desc='55 Credits towards B.S. in Computer Science'
        time='Fall 2015 - Spring 2017 | Brookville, Long Island'
        items={postItems}
        courses={postCourses}
      />
    </div>
  );
};

export default education;
