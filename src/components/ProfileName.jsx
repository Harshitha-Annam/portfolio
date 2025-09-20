import React from "react";
import { Mail, MapPinned, Linkedin, Github } from "lucide-react";

const ProfileName = () => {
  return (
    <div className="name-container">
      <h1 className="name-value">HARSHITHA ANNAM</h1>
      <h3 className="location">
        <span>
          <MapPinned />
        </span>
        Hyderabad, India
      </h3>
      <div className="contact-me">
        <span>
          <a href="https://mail.google.com/mail/?view=cm&to=harshithaannam149@gmail.com" target="_blank"><Mail /></a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/harshitha-annam-232a312a6" target="_blank"><Linkedin /></a>
        </span>
        <span>
          <a href="https://github.com/Harshitha-Annam" target="_blank"><Github /></a>
        </span>
      </div>
    </div>
  );
};

export default ProfileName;
