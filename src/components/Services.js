// src/components/Services.js
import React from 'react';
// import './Services.css';
import './Style.css';
const Services = () => (
  <section className="services" id="services">
    <h2 className="heading"><span>EXPERIENCES & SKILLS</span></h2>
    <div className="services-container">
      <div className="services-box">
        <i className="fa-solid fa-code"></i>
        <h3>Associate Software Engineer</h3>
        <p>BRAIN STATION 23 Aug 2023 - Now</p>
        <p>• Working with .NET </p>
        <h3>Software Engineer Trainee</h3>
        <p>BRAIN STATION 23 Mar 2023 - Jul 2023</p>
        <p>• Worked with ASP .NET MVC FrameWork</p>
        {/* <a href="#" className="btn">Read More</a> */}
      </div>
      <div className="services-box">
        <i className="fa-solid fa-palette"></i>
        <h3>Problem Setter </h3>
        <p>• Fall 2022 -
          DIU Take off Programming
          Contest</p>
        <h3>Executive (ACM) </h3>
        <p>• 2021
            DIU Computer and
            Programming Club</p>
       
        <h3>Lab Prefect  </h3>
        <p>• 2021
            Programming and problem
            solving, Algorithms</p>
        {/* <a href="#" className="btn">Read More</a> */}
      </div>
      <div className="services-box">
        <i className="fa-brands fa-android"></i>
         <h3>Skills </h3>
        <p>Algorithms • Data Structure
        • Object Oriented
          Programming • MSSQL • MySQL• git</p>
        <h3>Languages</h3>
        {/* <ul> */}
          <p>C/C++ • C# • Python(basic) • PHP • JavaScript</p>
          {/* <p>C#</p>
          <p>Python(basic)</p>
          <p>PHP</p>
          <p>JavaScript</p> */}
          
        {/* </ul> */}
        <h3>FrameWork</h3>
       
        <p>ASP.NET
        • React.js • Yii2</p>
     
      </div>
    </div>
  </section>
);

export default Services;
