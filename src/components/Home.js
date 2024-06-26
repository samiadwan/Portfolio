// src/components/Home.js
import React from 'react';
// import './Home.css';
import './Style.css';
const Home = () => (
  <section className="home" id="home">
    <div className="home-content">
      <h3>WELCOME!</h3>
      {/* <h1>This is Samia Dewan Ria</h1> */}
      <h3>I am a <span className="multiple-text"></span></h3>
      <p>As a software engineer dedicated to continuously learning the newest technologies, programming languages, and frameworks. </p>
      <div className="social-media">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/samia-dewan-283842235" target="_blank" rel=""><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-github"></i></a>
      </div>
      {/* <a href="#" className="btn">Download CV</a> */}
      <a href="https://drive.google.com/file/d/1DejwAhdd7ZNMkzIRdqZyHKtnMPTx_35o/view?usp=drivesdk" target="_blank" rel="" className="btn">Download CV</a>
    </div>
    <div className="home-img">
      <img src="/profile.png" alt="Profile" />
    </div>
  </section>
);

export default Home;
