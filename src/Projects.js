import React from 'react';
import './Project.css'; // Import the CSS file for styling (create a Project.css file)
import picp from './p11.jpg';
import picp1 from './p2.jpg';
import picp2 from './p3.jpg';
import githubIcon from './github-icon.png';

function Project() {
  const projects = [
    {
      title: "Stock chart in react js",
      image: picp,
      description:  "Stock chart in React JS is a project that aims to display interactive and real-time stock charts using React JS. It provides users with the ability to visualize stock data in the form of line charts, candlestick charts, or other popular chart types. The project leverages React's component-based architecture and integrates with financial data APIs to fetch and display the stock data.",
      toolsUsed: "React JS, JavaScript, HTML, CSS, charting libraries (such as Chart.js or D3.js), financial data APIs (such as Alpha Vantage or Yahoo Finance API).",
      githubLink: "https://github.com/Hemanth-Karnati-HK"
    },
    {
      title: "React-Native Job Search Mobile App using Rapid API",
      image: picp1,
      description: "A mobile application developed using React Native and integrating the Rapid API for job search functionality.",
      toolsUsed: "React Native, Rapid API",
      githubLink: "https://github.com/Hemanth-Karnati-HK"
    },
    {
      title: "Text Summarization and Keyword Generation Web App",
      image: picp2,
      description: "A web application that performs text summarization and keyword generation. It utilizes natural language processing techniques and algorithms such as SpaCy and NLTK to generate concise summaries and extract important keywords from given text inputs.",
      toolsUsed: "Python, Flask, SpaCy, NLTK, HTML, CSS, JavaScript, and jQuery.",
      githubLink: "https://github.com/Hemanth-Karnati-HK"
    }
  ];

  return (
    <div>
      <div className='spp'></div>
      <div className='pma'></div>

      <h1 id="pt">Projects</h1>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-tools">Tools Used: {project.toolsUsed}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <img
                src={githubIcon}
                alt="GitHub Icon"
                className="github-icon"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
