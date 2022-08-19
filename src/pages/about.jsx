import React from "react";
import { Link } from "react-router-dom";
import about from "../images/about.jpg"

import Common from "./common";
import "./common.css"


function About() {

    return (<>

 <Common para=" welcome to about page"
       name="Love singh"
       heading="Grow your business with"
       image={about}></Common>
     

    </>)
}
export default About;
