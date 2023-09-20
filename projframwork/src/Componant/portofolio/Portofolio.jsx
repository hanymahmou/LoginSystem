import React, { Component } from "react";
import img1 from "../images/poert1.png";
import img2 from "../images/port2.png";
import img3 from "../images/port3.png";
import "./Portofolio.css";

export default class Portofolio extends Component {
  render() {
    return (
      <div className="porto">
        <h4 className="text-center pt-3 mt-5">PORTFOLIO COMPONENT</h4>

        <div className=" d-flex align-items-center justify-content-center">
          <span className="linePorto"></span>
          <i className="fa-solid fa-star m-3"></i>
          <span className="linePorto"></span>
        </div>

        <div className="container">
          <div className="row g-3">
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img1} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img2} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img3} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img1} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img2} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img src={img3} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

    {/* <div className="model position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center">

    </div> */}
      </div>
    );
  }
}
