import React from "react";

const About = () => {
  return (
    <section className="container about">
      <div className="role">
        <div></div>

        <h3>Full-Stack Developer, AI & ML Enthusiast</h3>
      </div>
      <div className="about-text">
        <h4>
          Currently building cool projects with <span>Python</span> and{" "}
          <span>JavaScript</span> related frameworks such as <span>Django</span>{" "}
          and <span>ReactJs.</span>
        </h4>
      </div>
      <div className="available">
        <span>
          <div></div>
        </span>
        Actively seeking new opportunities
      </div>
      <div className="resume-note">
        <div><a href="./Harshitha_CV_13_09_25.pdf" target="_blank" download='harshitha_resume.pdf' type="application/octet-stream">Download CV</a></div>
        <div><a href="https://mail.google.com/mail/?view=cm&to=harshithaannam149@gmail.com" target="_blank">Send a Note</a></div>
      </div>
    </section>
  );
};

export default About;
