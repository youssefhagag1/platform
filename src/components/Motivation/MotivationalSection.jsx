import React from 'react';
import Styles from "./MotivationalSection.module.css";
import { Link } from 'react-router-dom';

function MotivationalSection({ 
  title = "Expand Your Knowledge",
  description = "Access thousands of online courses in programming, design, business, and more from industry experts.",
  stats = [
    { value: "500+", label: "Online Courses" },
    { value: "10K+", label: "Students Enrolled" },
    { value: "200+", label: "Expert Instructors" }
  ],
  buttonText = "Explore Courses",
  redirect = "/courses"
}) {
  return (
    <div className={Styles.platformSection}>
      <div className={Styles.platformContent}>
        <h1 className={Styles.platformTitle}>{title}</h1>
        <p className={Styles.platformText}>{description}</p>
        
        <div className={Styles.courseStats}>
          {stats.map((stat, index) => (
            <div className={Styles.statItem} key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        
        <Link to={redirect} className={Styles.exploreButton}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default MotivationalSection;