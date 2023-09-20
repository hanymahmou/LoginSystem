import React, { Component } from "react";
import "./Home.css";
import myImage from "../images/avataaars (1).svg"

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="HomeSecthion d-flex justify-content-center align-items-center flex-column">
            
          <div className="d-flex justify-content-center flex-column  align-items-center ">
            <div className="row">
            <img src={myImage} alt=""  className="d-flex justify-content-center pb-2 align-items-center m-auto  w-25 " />
            <h6 className="text-center text-uppercase fw-bolder text-white">START FRAMEWORK</h6>
            <div className=" d-flex align-items-center justify-content-center">
              <span className="lineHome"></span>
              <i className="fa-solid fa-star m-2 text-white"></i>
              <span className="lineHome"></span>
            </div>

            </div>
         


         

          </div>


          <div className="pt-4 text-white">
            <h5>Graphic Artist - Web Designer - Illustrator</h5>
          </div>
        </div>
      </>
    );
  }
}
