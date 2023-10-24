import React from "react";
import img from "../../assets/images/profileJT.jpg";
import "./Home.css";
import Buttons from "../Button/Button";
import { BsMouse } from "react-icons/bs";
import About from "../About/About";
import Certificates from "../Certificates/Certificates";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img className="img" src={img} alt="" />
      </div>

      <About />
      <h1>DOWNLOAD CV</h1>
      <Buttons />
      <br />
      <h1 id="certificates">CERTIFICATES</h1>
      <Certificates />
    </div>
  );
}

export default Home;
