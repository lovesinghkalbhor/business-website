
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import web from "./images/business.jpg"
import Common from "./common";
import "./common.css"
function Home() {
   
    return (<>

      <Common para=" we are the team of talented developer making websites"
       name="Love singh"
       heading="Grow your business with"
       image={web}></Common>


    </>)

}


export default Home;
