import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import { Banner,  Service } from "../../components";

const Home = () => {
  let add=()=>{
    
  }
  add()
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Project />
      {/* <Testimonial /> */}
      {/* <Information /> */}
      <Contact />
    </div>
  );
};

export default Home;
