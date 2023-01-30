import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <>
      <div class="aboutsection-outer-container" id="about">
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
          <div className="about-grid-item-upper-right"></div>
        </div>

        <div className="aboutsection-grid-container-lower">
          <h1>The Management Team</h1>
          <div class="aboutsection-grid-container">
            <div class="about-grid-item">
              <div class="card">
                <div className="flip-front">
                  <img
                    class="aboutsection-image"
                    src="/images/logotim.jpg"
                    alt="Avatar"
                    width="100%"
                  />
                  <div class="container">
                    <h4>
                      <b>Tim Andersson</b>
                    </h4>
                    <p>PO & CO</p>
                  </div>
                </div>
                <div class="flip-back">
                  <h1>Tim Andersson</h1>
                  <p>lorem ipsum, lorem ipsum</p>
                  <p>lorem ipsum, lorem ipsum</p>
                </div>
              </div>
            </div>
            <div class="about-grid-item">
              <div class="card">
                <div className="flip-front">
                  <img
                    class="aboutsection-image"
                    src="/images/Nicolai.png"
                    alt="Avatar"
                    width="100%"
                  />
                  <div class="container">
                    <h4>
                      <b>Tim Andersson</b>
                    </h4>
                    <p>PO & CO</p>
                  </div>
                </div>
                <div class="flip-back">
                  <h1>Tim Andersson</h1>
                  <p>lorem ipsum, lorem ipsum</p>
                  <p>lorem ipsum, lorem ipsum</p>
                </div>
              </div>
            </div>
            <div class="about-grid-item">
              <div class="card">
                <div className="flip-front">
                  <img
                    class="aboutsection-image"
                    src="/images/logoelvis.jpg"
                    alt="Avatar"
                    width="100%"
                  />
                  <div class="container">
                    <h4>
                      <b>Tim Andersson</b>
                    </h4>
                    <p>PO & CO</p>
                  </div>
                </div>
                <div class="flip-back">
                  <h1>Tim Andersson</h1>
                  <p>lorem ipsum, lorem ipsum</p>
                  <p>lorem ipsum, lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
