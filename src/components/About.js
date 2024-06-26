// src/components/About.js
import React from 'react';
import './Style.css';

const About = () => (
  <section className="about" id="about">
    {/* <div className="about-img">
      <img src="/profile.png" alt="Profile" />
    </div> */}
    <div className="about-content">
      <h2 className="heading">About <span>Me</span></h2>
      <h3>Software Developer</h3>
      <p>As a software engineer dedicated to continuously learning the newest technologies, programming languages, and frameworks.I am in search of a prestigious and cooperative workplace where I can leverage my knowledge and technological expertise to solve real-world challenges. I aim to develop fully as a person and reach my potential. Programming and problem-solving are two passions I deeply enjoy, and I am always open to learning new things to enhance my skills further.
        I have 1.5 year experience in ASP.net core. Handeling Backend in MSQL is my main goto work.
      </p>
      <a href="#" className="btn">Read more</a>
     
    </div>
  </section>
);

export default About;
