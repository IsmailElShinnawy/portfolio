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
  const [activeTab, setActiveTab] = useState('aboutMe');
  return (
    <div className='mx-auto about-me'>
      {tabs.map(tab => (
        <button
          key={tab.id}
          type='button'
          className={`tab p-0 py-2 mx-3 ${tab.id === activeTab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default AboutMe;
