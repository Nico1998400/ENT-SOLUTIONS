import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-scroll";

function HeroSection() {
  return (
    <div className="hero-container" id="home">
      <h1>ADVENTURE AWAITS</h1>
      <p>We have the IT solutions</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            GET STARTED
          </Link>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => (window.location = "mailto:ENTSolutions@hotmail.com")}
        >
          Mail us <i class="far fa-user" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
