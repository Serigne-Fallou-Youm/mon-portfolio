import React from "react";
import heroImg from "../assets/images/fff.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Salut, je suis <span>Serigne Fallou Youm</span></h1>
        <p>
          Développeur Web Fullstack & Passionné par la création de sites modernes
          et performants. <br />
          Je maîtrise : <strong>Laravel</strong>, <strong>React</strong>, <strong>Python</strong>, <strong>PHP</strong>.
        </p>
        <div className="hero-skills">
          <span>Laravel</span>
          <span>React</span>
          <span>Python</span>
          <span>PHP</span>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="fff" />
      </div>
    </section>
  )
}

export default Hero