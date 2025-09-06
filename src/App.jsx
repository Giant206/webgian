import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hosting from "./components/Hosting";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"; 
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="hosting">
        <Hosting />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
