import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="container-fluid footer text-center fixed-bottom d-flex align-items-center justify-content-center pt-1">
          <div className="row">
            <div className="col-md-4">
              <h6>LOCATION</h6>
              <h6>2215 John Daniel Drive</h6>
              <h6>Clark, MO 65243</h6>
            </div>

            <div className="col-md-4">
              <h6 className="text-center">AROUND THE WEB</h6>
              <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-globe"></i>
              </div>
            </div>

            <div className="col-md-4">
              <h6>ABOUT FREELANCER</h6>
              <h6>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </h6>
            </div>

        <div>
              <div className="EndFooter pt-1 text-center d-flex justify-content-center ">
                <h6>Copyright © Your Website 2021</h6>
              </div>
            </div>
        
          </div>
        </div>

     
      </>
    );
  }
}
