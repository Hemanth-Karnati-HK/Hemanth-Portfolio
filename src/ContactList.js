import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons';

const ContactList = () => {
  const contacts = [
    {
      icon: <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />,
      link: 'https://www.linkedin.com/in/hemanth-karnati-cs/',
      label: 'Hemanth Karnati on LinkedIn',
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} className="text-2xl" />,
      link: 'https://github.com/Hemanth-Karnati-HK',
      label: 'Hemanth Karnati on GitHub',
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelopeSolid} className="text-2xl" />,
      link: 'mailto:karnati.hemanth2123@gmail.com',
      label: 'Contact Hemanth Karnati via Email',
    },
  ];

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          title={contact.label}
          className="contact-link"
        >
          {contact.icon}
        </a>
      ))}
    </div>
  );
};

export default ContactList;
