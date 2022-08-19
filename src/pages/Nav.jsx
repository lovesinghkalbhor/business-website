
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Nav() {


   
    return (<>
    <div className="navbar d-flex justify-content-around">
        <div>
            <h3>Love Singh Kalbhor</h3>
        </div>

        <div>
            <ul className="nav navbar-collapse  ">
                <li className="nav-item">

                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div>
            <LinkedInIcon></LinkedInIcon>
            <InstagramIcon></InstagramIcon>
            <FacebookIcon></FacebookIcon>
         
        </div>
        </div>
    </>)

}


export default Nav;
