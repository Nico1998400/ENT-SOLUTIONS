import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection"
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <ServiceSection />
        <AboutSection/>
        <Footer />
      </Router>
    </>
  );
}

export default App;

