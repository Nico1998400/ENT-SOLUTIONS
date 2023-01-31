import React from "react";
import "./ManagementSection.css";

const ManagementSection = () => {

    return (

        <div className="aboutsection-grid-container-lower">
        <h1>The Management Team</h1>
        
       
       
       <div class="aboutsection-grid-container">
          
        <div class="about-grid-item">
            <div className="card">
              <div className="flip-front">
                <img
                  class="aboutsection-image"
                  src="/images/logotim.jpg"
                  alt="Avatar"
              
                />
                
                <div className="container">
                  <h4>
                    <b>Tim Andersson</b>
                  </h4>
                  <p>PO & CO</p>
                </div>
              </div>
              <div className="flip-back">
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

    );
};

    export default ManagementSection;