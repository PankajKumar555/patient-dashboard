import React from "react";
import { BsArrowRight } from "react-icons/bs";
import heroimg from "../assets/hero-img.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="herosection">
      <h1>Welcome back, Chris.</h1>
      <p className="herocontant">
        Let's take a look at your day today! You have <b>0 patients </b>
        schedule and{" "}
        <b>
          0 new <br></br> patients.
        </b>{" "}
        You are Scheduled to produce <b>$0.00.</b> You need to produce{" "}
        <b> $0.00 </b> stay on <br></br> track this month.{" "}
        <span className="herocontant_green"> View Huddle</span>
      </p>
      <div className="hero_card_containor">
        <div className="hero_card">
          <div>
            <p>Create a Custom Campagin </p>
          </div>
          <div className="heroicon">
            <BsArrowRight />
          </div>
        </div>
        <div className="hero_card">
          <div>
            <p>Work on My Tasks </p>
          </div>
          <div className="heroicon">
            <BsArrowRight />
          </div>
        </div>
        <div className="hero_card">
          <div>
            <p>Find Revenue Opportunities </p>
          </div>
          <div className="heroicon">
            <BsArrowRight />
          </div>
        </div>
      </div>
      <div className="heroimg">
        <img src={heroimg} alt="heroimage"></img>
      </div>
    </div>
  );
}

export default Hero;
