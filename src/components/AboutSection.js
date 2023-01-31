import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <>
      
        <div className="aboutsection-grid-container-upper">
          <div className="about-grid-item-upper-left">
            <h1>About</h1>
            <p className="about-grid-item-upper-left-p1">
              Our main goal is to add value to our clients in their
              transformations through combining our technology and data
              knowledge with our consulting experience.
            </p>
            <p className="about-grid-item-upper-left-p2">
              Our main goal is to add value to our clients in their
              transformations through combining our technology and data
              knowledge with our consulting experience.
            </p>
          </div>
          <div className="aboutimage-item-upper-right">  
            <img className="image"
                  src="/images/img-1.jpg"
                  alt="Avatar"
                />
          </div>
        </div>

      
    </>
  );
};

export default AboutSection;
