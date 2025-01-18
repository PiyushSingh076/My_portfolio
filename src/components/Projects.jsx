import React, { useState, useEffect } from 'react';
import './Projects.css';
import friday from './media/friday.mp4';
import task from './media/task.mp4';
import monster from './media/monster.mp4';

function Projects() {
  const projects = [
    {
      title: "F.R.I.D.A.Y",
      description: "Chat gpt version of my own with features like Ask ai ,stock image generator and recipe generator",
      video: friday,
    },
    {
      title: "SmartSpend",
      description: "Manage and monitor your expenses and transactions in the best possible way ",
      video: task,
    },
    {
      title: "Monster City",
      description: "The ninja has to escape the monsters in this monster city and get home safe. Help him do so",
      video: monster,
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isAutoplayEnabled) {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [isAutoplayEnabled, projects.length]);

  const handleProjectChange = (index) => {
    setCurrentProjectIndex(index);
  };

  const toggleAutoplay = () => {
    setIsAutoplayEnabled(!isAutoplayEnabled);
  };

  return (
    <div className="projects">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <video 
              controls 
              autoPlay={index === currentProjectIndex && isAutoplayEnabled} 
              muted 
              loop 
              className="project-video" 
              onEnded={() => handleProjectChange(index)} 
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;