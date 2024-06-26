// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProblemSolve from './components/ProblemSolve.js';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

const App = () => {
  useEffect(() => {
    // ScrollReveal
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content p, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'right' });

    // Typed.js
    const typed = new Typed('.multiple-text', {
      strings: ['Full Stack Developer', 'Web Developer', 'Programmer'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <ProblemSolve />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
