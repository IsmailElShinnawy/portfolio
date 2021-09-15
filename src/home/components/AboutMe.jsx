import React, { useState } from 'react';

import './AboutMe.scss';

const tabs = [
  {
    id: 'aboutMe',
    title: 'About Me',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState();
  return (
    <div className='mx-auto about-me'>
      <button type='button' className='btn mx-3'>
        About Me
      </button>
      <button type='button' className='btn mx-3'>
        Education
      </button>
      <button type='button' className='btn mx-3'>
        Skills
      </button>
      <button type='button' className='btn mx-3'>
        Contact
      </button>
    </div>
  );
};

export default AboutMe;
