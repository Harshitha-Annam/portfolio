import React from "react";
import { BookOpenCheck } from "lucide-react";

const Education = () => {
  return (
    <section className="container education-section">
      <div className="section-header">
        <div className="section-icon">
          <BookOpenCheck />
        </div>
        <h3 className="section-title">Education</h3>
      </div>
      <div className="section-content">
        <div className="sub-section graduation">
          <div className="education-image">
            
          </div>
          <div className="education-content">
            <h4 className="institute-name">
              Jyothishmathi Institute of Technology & science
            </h4>
            <p className="stream">
              Bachelor of Technology, Computer Science and Engineering
            </p>
            <p className="result">CGPA: 8.91</p>
          </div>
          <div className="board-time">
            <p className="board">Affiliated to JNTUH</p>
            <p className="time">2021-2025</p>
          </div>
        </div>
        <div className="sub-section college">
          <div className="education-image">
            
          </div>
          <div className="education-content">
            <h4 className="institute-name">Alphores Junior College</h4>
            <p className="stream">
              Higher Secondary, Physics Chemistry Mathematics {"(PCM)"}
            </p>
            <p className="result">Percentage: 98%</p>
          </div>
          <div className="board-time">
            <p className="board">TSBIE</p>
            <p className="time">2019-2021</p>
          </div>
        </div>
        <div className="sub-section school">
          <div className="education-image">
            
          </div>
          <div className="education-content">
            <h4 className="institute-name">Paradise High School</h4>
            <p className="stream">Secondary School, General Studies</p>
            <p className="result">GPA: 10.0</p>
          </div>
          <div className="board-time">
            <p className="board">SSC</p>
            <p className="time">2018-2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
