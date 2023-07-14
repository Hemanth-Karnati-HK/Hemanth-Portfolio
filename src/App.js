import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import ContactList from './ContactList';
import './App.css';
import Skills from './Skills';
import Icon from './Icon.svg';
import { FaMedium, FaKaggle } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import Certificates from './Certificates';

const App = () => {
  useEffect(() => {
    // Check if the URL contains a hash and scroll to the corresponding section
    const hash = window.location.hash;
    if (hash) {
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="main">
        <header className="header">
          <div className="icon-container">
            <img src={Icon} alt="Icon" className="icon" />
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <a href="#skills" onClick={scrollToSection}>Skills</a>
            <a href="#projects" onClick={scrollToSection}>Projects</a>
            <a href="#certificates" onClick={scrollToSection}>Certificates</a>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Skills" element={<Skills id="skills" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Certificates" element={<Certificates />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="foot">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <p>
              <span className="small">Hi, I'm</span>
            </p>
            <h1 className="name">HEMANTH <span className="name1">KARNATI</span></h1>
            <div className='job'>
              <p>
                I Code Things For The WEB
              </p>
            </div>
            <a href="https://drive.google.com/file/d/1QdILhO21Ve_-duNjC7PaNVYcyQoudgos/view?usp=sharing" download>
              <button className="download-button">Download Resume</button>
            </a>

            <div className="social-links1">
              <br></br>
              <a href="https://medium.com/@karnati.hemanth2123" target="_blank" rel="noopener noreferrer">
                <FaMedium className="social-icon" size={32} color="pink" style={{ marginRight: '20px' }} />
              </a>
              <a href="https://www.kaggle.com/hemanthkarnati" target="_blank" rel="noopener noreferrer">
                <FaKaggle className="social-icon" size={32} color="skyblue" style={{ marginRight: '20px' }} />
              </a>
              <a href="https://leetcode.com/Hemanth_karnati/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="social-icon" size={32} color="gold" style={{ marginRight: '20px' }} />
              </a>
              <a href="https://www.coursera.org/user/1a2b5bcab9d1d54d6b91fe71e107a5f6" target="_blank" rel="noopener noreferrer">
                <AiFillCodeSandboxCircle className="social-icon" size={32} color="blue" style={{ marginRight: '20px' }} />
              </a>
            </div>
          </div>
          <div className="box">
            <div className="a1">
              Hi, I'm Karnati Hemanth, a final year Computer Science student from VIT Vellore. I started my programming journey with
              frontend web technologies such as HTML, CSS, and JavaScript. I haven't stopped since then. Building things for
              the web, both client-side and occasionally server-side, has been my favorite.
            </div>
            <br />
            <div className="a2">
              I am interested in Software Engineering, Machine Learning, and Data Science jobs
            </div>
            <div className="signature">- Karnati Hemanth</div>
          </div>

          <div className="sp"></div>
          <Skills id="skills" />
          <Projects id="projects" />
          <Certificates id="certificates" />
        </footer>

        <ContactList />
      </div>
    </Router>
  );
};

export default App;

