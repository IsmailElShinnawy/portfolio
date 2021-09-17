import React from 'react';

import './AboutMe.scss';

const sections = [
  {
    id: 'aboutMe',
    title: 'About Me',
    content: (
      <div className='content'>
        <p>
          I am currently a software engineer 👨‍💻 at Mindeavors, there I transform business
          ideas to software that people can make use of and enjoy.
        </p>
        <p>
          I am also a computer engineering 💻 junior @ the German University in Cairo,
          studying computer engineering has been my dream since early years in my life and
          I am really enjoying it.
        </p>
        <p>
          I have been fencing 🤺 since 2012! I am have been a first-team member at Gezira
          Sporting Club since 2016.
        </p>
      </div>
    ),
  },
  {
    id: 'education',
    title: 'Education',
    content: <div></div>,
  },
  {
    id: 'skills',
    title: 'Skills',
    content: <div></div>,
  },
  {
    id: 'contact',
    title: 'Contact',
    content: <div></div>,
  },
];

const AboutMe = () => {
  // const [activeTab, setActiveTab] = useState('aboutMe');
  // <div className='mx-auto about-me'>
  //   {tabs.map(tab => (
  //     <button
  //       key={tab.id}
  //       type='button'
  //       className={`tab p-0 py-2 mx-3 ${tab.id === activeTab ? 'active' : ''}`}
  //       onClick={() => setActiveTab(tab.id)}
  //     >
  //       {tab.title}
  //     </button>
  //   ))}
  // </div>
  return sections.map(section => (
    <section key={section.id} className=''>
      <h2 className='display-5 title text-center pb-4'>{section.title}</h2>
      {section.content}
    </section>
  ));
};

export default AboutMe;
