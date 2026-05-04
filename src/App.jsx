import Navbar from "./components/navbar";
import React from "react";
import About from "./components/About";
import Hero from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Internship from "./components/Internship";
import Education from "./components/Education";
import "./App.css";

function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Internship/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  );
}
export default App;
