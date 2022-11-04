import React, { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Programs from "./Programs";

const Homepage=()=>{
    useEffect(()=>{
        document.title = 'Home';
      })
    return(
        <>
        <Home/>
        <Programs/>
        <About/>
        </>
    )
}
export default Homepage