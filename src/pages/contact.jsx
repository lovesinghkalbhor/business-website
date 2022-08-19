import React from "react";
import { Link } from "react-router-dom";

// import {Route,Switch} from "react-router-dom";
function Contact() {


  return (<>
<div className="form-container d-flex justify-content-center mb-5 ">
 <h3>Contact Us</h3>
<form className="form">
  <div class="mb-3 ">
  <div class="mb-3">
    <label class="form-label">Full Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>

    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label  class="form-label">Contact number</label>
    <input type="number" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label class="form-label">Message</label>
    <textarea type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

  </>

  )
}

export default Contact ;
