import "./App.css";
import "./components/skills.css";
import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from './components/Projects';
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="main-body">
      <ProfileHeader />
      <About />
      <Skills />
      <Projects/>
      <Education />
      <Certifications/>
      <Footer/>
    </main>
  );
};

export default App;
