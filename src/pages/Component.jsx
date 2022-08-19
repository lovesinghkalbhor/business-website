import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import Nav from "./Nav";

function Component() {

  return (<>
   <Nav></Nav>
   
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<Navigate  to="/" />} />
    </Routes>

  </>)
}



export default Component;
