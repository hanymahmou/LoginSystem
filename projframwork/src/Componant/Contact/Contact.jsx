import React, { Component } from 'react'
import "./Contact.css"
export default class Contact extends Component {
  render() {
    return <>

    <div className='100-vh'>
      <div className='pt-5'>
      <h3 className='text-center pt-3'>CONATCT SECTION</h3>

      </div>
    
    <div className=" d-flex align-items-center justify-content-center">
          <span className="lineContact"></span>
          <i className="fa-solid fa-star m-2"></i>
          <span className="lineContact"></span>
          </div>

<div className='w-50 m-auto'>
<div class="mb-3">
  <label htmlFor="exampleFormControlInput1" class="form-label py-1">User Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  <label htmlFor="exampleFormControlInput1" class="form-label  py-1 ">User Age</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  <label htmlFor="exampleFormControlInput1" class="form-label  py-1 ">User Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  <label htmlFor="exampleFormControlInput1" class="form-label  py-1 ">User Password</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
</div>
<button className='btn btn-outline-info'> Send Massege </button>
</div>

    </div>

  
    </>
  }
}
