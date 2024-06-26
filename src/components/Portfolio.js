// src/components/Portfolio.js
import React from 'react';
// import './Portfolio.css';
import './Style.css';
const Portfolio = () => (
  <section className="portfolio" id="portfolio">
    <h2 className="heading">Latest <span>Projects</span></h2>
    <div className="portfolio-container">

      <div className="portfolio-box">
        {/* <img src="./BS.png" alt="Project" /> */}
        <div className="portfolio-layer">
          <h4>Project: BORNOMALA  <a href="https://github.com/samiadewan/Bornomala.git" target="_blank" rel="" className="btnG">GitHup Link</a></h4> 
         
          <p>Technology Used: C#, ASP.NET, MVC, JS, SQL Server, HTML, CSS</p>
          
          <p>Short Description: This online bookstore gives writers the
              ability to easily manage their literary works. With only a few
              clicks, authors can add, remove, and update their works on our
              user-friendly platform. In the dashboard, users can view a
              number of booklists and descriptions.</p>
          {/* <i className="fa-solid fa-up-right-from-square"></i> */}
        </div>

      </div>
      <div className="portfolio-box">
        <div className="portfolio-layer">
            <h4>Project: Quiz  <a href="https://github.com/samiadwan/Quiz.git" target="_blank" rel="" className="btnG">GitHup Link</a></h4> 
          
            <p>Technology Used: React JS, HTML, CSS , Firebase</p>
            
            <p>Short Description: Develop an interactive and secure online quiz platform designed for educational and entertainment purposes. The platform will feature robust user authentication to ensure a personalized and secure experience for all users.</p>
            {/* <i className="fa-solid fa-up-right-from-square"></i> */}
          </div>
       </div>
       <div className="portfolio-box">
        <div className="portfolio-layer">
          <h4>Project: BiGGAPON  <a href="https://github.com/samiadwan/BIGGAPON.git" target="_blank" rel="" className="btnG">GitHup Link</a></h4> 
         
          <p>Technology Used:  PHP, Laravel, MySQL, HTML, CSS, JavaScript.</p>
          
          <p>Short Description: Basically, a project for students based on
              advertising. Students can look up TO-LET advertisements here.
              Even students may post everyday items for sale. An easy-to-use
              Interface makes it simple for users to log in and access the
              dashboard.</p>
          {/* <i className="fa-solid fa-up-right-from-square"></i> */}
        </div>

       </div>
       
       <div className="portfolio-box">
        <div className="portfolio-layer">
          <h4>Project: Booked Meeting Room  <a href="https://github.com/samiadwan/Booked-Meeting-Room.git" target="_blank" rel="" className="btnG">GitHup Link</a></h4> 
         
          <p>Technology Used:  Yii2FrameWork Rest API, PHP, JavaScript, MySQL ,CSS.</p>
          
          <p>Short Description: Develop an interactive and secure online Meeting Room platform using Rest API. The platform will feature robust user authentication to ensure a personalized and secure experience for all users.</p>
          {/* <i className="fa-solid fa-up-right-from-square"></i> */}
        </div>
        
       </div>
   
    </div>
  </section>
);

export default Portfolio;
