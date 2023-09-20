import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="aboutHead">
          <h2>ABOUT COMPONENT</h2>
          <div className=" d-flex align-items-center justify-content-center">
          <span className="line"></span>
          <i className="fa-solid fa-star m-2"></i>
          <span className="line"></span>
          </div>


          </div>
     

          <div className="aboutContant">
            <div className="m-3">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>

            <div className="m-3">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
