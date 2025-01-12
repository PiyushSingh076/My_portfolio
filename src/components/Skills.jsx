import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "HTML", level: 95 },
    { name: "SpringBoot", level: 70 },
    { name: "React", level: 85 },
    { name: "CSS", level: 90 },
    { name: "JavaScrpit", level: 80 },
    { name: "Android Dev", level: 80 },
    { name: "Python", level: 80 },
    { name: "JavaScrpit", level: 80 },
    { name: "Data structures & Algorithms", level: 95 },
  ];

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span>{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
