import React from 'react';
import './Certificates.css';
import pdf from './pdf-icon.png';

const certificates = [
  {
    id: 1,
    title: 'Cloud Computing',
    link: 'https://coursera.org/share/6d30ec2381298b4db6733b4462788fdb',
  },
  {
    id: 2,
    title: 'Python Project for AI & Application Development',
    link: 'https://coursera.org/share/bf644d3ecc7b5862968f72ddbddfc10e',
  },
  {
    id: 3,
    title: 'Applied Machine Learning in Python',
    link: 'https://coursera.org/share/60a5a07936c559fa3d5f838a87e2f669',
  },
  {
    id: 4,
    title: 'Introduction to Web Development with HTML, CSS, JavaScript',
    link: 'https://coursera.org/share/7c3e019f27c535b856a98f8db9eb798d',
  },
  {
    id: 5,
    title: 'Supervised Machine Learning: Regression and Classification',
    link: 'https://coursera.org/share/a4a507dbae7f9343f9bf4dc35fa4c3c9',
  },
  {
    id: 6,
    title: 'React',
    link: 'https://coursera.org/share/563a982467d8d73733f0fb8e435b4535',
  },
  {
    id: 7,
    title: 'Python for Data Science, AI & Development',
    link: 'https://coursera.org/share/44dcea6f35dae07420eebdb11753a316',
  },
  {
    id: 8,
    title: 'Getting Started with Git and GitHub',
    link: 'https://coursera.org/share/18146dd90594b9484100e097e574af3e',
  },
];

function Certificates() {
  return (
    <div>
      <h1 id="ptc">Certificates</h1>
      <div className="certificate-container">
        {certificates.map((certificate) => (
          <div className="certificate" key={certificate.id}>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              <img
                src={pdf}
                alt="PDF Icon"
                className="certificate-pdf-icon"
              />
            </a>
            <h2 className="certificate-title">
              <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                {certificate.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
