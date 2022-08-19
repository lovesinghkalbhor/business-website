
import React from "react";
// import { Link } from "react-router-dom";
// import "./common.css";
import about from "../images/about.jpg"

function Common(props) {
   
    return (<>
       <section id="header" className="d-flex align-items-center mt-5 mb-5">
           <div className="container-fluid nav_bg">
               <div className="row">
                   <div className="col-10 mx-auto">
                   <div className="row d-flex align-items-center">
                       <div className="mt-5 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           <h1>
                             {props.heading} <strong > {props.name}</strong>
                           </h1>
                           <h2 className="my-3">
                          {props.para}
                           </h2>
                           <div className="mt-3">
                          
                               <a href="" className="btn btn-primary">Get started</a>
                             
                           </div>
                       </div>
                       <div className="col-lg-6 order-1 order-lg-2 header-img ">
                           <img src={props.image} alt="/" className="img-fluid animate"></img>
                       </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>


    </>)

}


export default Common;
