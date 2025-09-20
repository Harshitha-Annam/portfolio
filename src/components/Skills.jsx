import React from "react";
import { ToolCase } from "lucide-react";

const Skills = () => {
  return (
    <section className="container skills-section">
      <div className="section-header">
        <div className="section-icon">
          <ToolCase />
        </div>
        <h3 className="section-title">Skills & Expertise</h3>
      </div>
      <div className="section-content">
        <div className="sub-section">
          <div className="sub-section-header">
            <div></div>
            <h4>Programming Languages</h4>
          </div>
          <div>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
        <div className="sub-section">
          <div className="sub-section-header">
            <div></div>
            <h4>Front End Development</h4>
          </div>
          <div>
            <ul>
              <li>ReactJs</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
              <li>CSS3</li>
              <li>HTML5</li>
            </ul>
          </div>
        </div>
        <div className="sub-section">
          <div className="sub-section-header">
            <div></div>
            <h4>Back End Development</h4>
          </div>
          <div>
            <ul>
              <li>Django</li>
              <li>Django REST Framework</li>
              <li>Flask</li>
              <li>NodeJs</li>
            </ul>
          </div>
        </div>
        <div className="sub-section">
          <div className="sub-section-header">
            <div></div>
            <h4>DataBase Management</h4>
          </div>
          <div>
            <ul>
              <li>MySql</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="sub-section">
          <div className="sub-section-header">
            <div></div>
            <h4>Others</h4>
          </div>
          <div>
            <ul>
              <li>Git</li>
              <li>Github</li>
              {/* <li>Canva</li> */}
              {/* <li>Figma</li> */}
              {/* <li>Algorithms</li> */}
              {/* <li>Data Structures</li> */}
              {/* <li>Machine Learning</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
