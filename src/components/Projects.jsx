import React from "react";
import {FolderGit2, ExternalLink, Github, MoveUpRight} from 'lucide-react';
import project1 from '../assets/project-1.JPG';
import wizardry from '../assets/wizardry-1.JPG';
import project2 from '../assets/project-2.JPG';
import project4 from '../assets/project-4.png';
const Projects = () => {
  return <section className="container projects-section">
    <div className="section-header projects-header">
        <div className="icon-title-container">
          <div className="section-icon">
          <FolderGit2 />
        </div>
        <h3 className="section-title">Projects</h3>
        </div>
        <div className="github-more"><a href="https://github.com/Harshitha-Annam" target="_blank">more<MoveUpRight/></a></div>
      </div>
    <div className="projects">
      <div className="project">
        <img src={project1} alt="supersonictype" />
      <h1 className="
      project-title">SuperSonicType</h1>
      
      <p className="project-desc">Supersonic Type is a web-based typing practice application built with HTML, CSS, and JavaScript. It helps users improve their typing skills by tracking speed (WPM), accuracy, and providing real-time feedback with highlighted errors for better practice.</p>
      <div className="project-links">
        <button className="git-link"><a href="https://github.com/Harshitha-Annam/SupersonicType" target="_blank"><Github/></a></button>
        <button className="live-link"><a href="https://harshitha-annam.github.io/SupersonicType/" target="_blank"><ExternalLink/></a></button>
      </div>
    </div>
     <div className="project">
      <img src={wizardry} alt="wizardry"/>
      <h1 className="
      project-title">Wizardry</h1>
      <p className="project-desc">Wizardry is a single page application developed using HTML, TailwindCSS and ReactJs. The project uses HarryPotter API to fetch the data. It include features like search and details of each character in Harry Potter series.</p>
      <div className="project-links">
        <button className="git-link"><a href="https://github.com/Harshitha-Annam/Wizardry" target="_blank"><Github/></a></button>
        <button className="live-link"><a href="https://harshitha-annam.github.io/Wizardry/" target="_blank"><ExternalLink/></a></button>
      </div>
    </div>
     <div className="project">
      <img src={project2} alt="vocabTrainer"/>
      <h1 className="
      project-title">VocabTrainer</h1>
      <p className="project-desc">VocabTrainer is an application built using HTML, CSS and ReactJs. It helps usears to practice vocabulary. Users have the flexibility to give words themselves and later practice them as fill in the blanks.</p>
      <div className="project-links">
        <button className="git-link"><a href="https://github.com/Harshitha-Annam/vocab-trainer" target="_blank"><Github/></a></button>
        <button className="live-link"><a href="https://harshitha-annam.github.io/vocab-trainer/" target="_blank"><ExternalLink/></a></button>
      </div>
    </div>
     <div className="project">
      <img src={project4} alt="tumorai"/>
      <h1 className="
      project-title">TumorAI</h1>
      <p className="project-desc">TumorAI is a web application used to detect and classify Brain Tumors through MRI Images. The project leverages Deep Learning algorithms like CNN to accurately detect and classify Brain Tumors. </p>
      <div className="project-links">
        <button className="git-link"><a href="https://github.com/Harshitha-Annam/TumorAI" target="_blank"><Github/></a></button>
        
        
      </div>
    </div>
    </div>
  </section>;
};

export default Projects;
