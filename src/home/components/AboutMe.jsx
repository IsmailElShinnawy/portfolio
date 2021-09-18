import React from 'react';

import selfImage from '../../assets/images/self-image.svg';
import educationImage from '../../assets/images/education-image.svg';
import skillsImage from '../../assets/images/skills-image.svg';

import './AboutMe.scss';

const sections = [
  {
    id: 'aboutMe',
    title: 'About Me',
    content: (
      <div>
        <p className='about-me-text'>
          I am currently a software engineer 👨‍💻 at Mindeavors, there I transform business
          ideas to software that people can make use of and enjoy.
        </p>
        <p className='about-me-text'>
          I am also a computer engineering 💻 junior @ the German University in Cairo,
          studying computer engineering has been my dream since early years in my life and
          I am really enjoying it.
        </p>
        <p className='about-me-text'>
          I have been fencing 🤺 since 2012! I am have been a first-team member at Gezira
          Sporting Club since 2016.
        </p>
      </div>
    ),
    imageSrc: selfImage,
  },
  {
    id: 'education',
    title: 'Education',
    content: (
      <div>
        <ul>
          <li className='mb-5'>
            <h4 className='py-2'>
              <u>Dar El Tarbiah Schools IGCSE</u>
              <span className='years ms-2'>
                <em>Sep 2015 - May 2018</em>
              </span>
            </h4>
            <p>
              Graduated with a perfect score of <strong>100%</strong>, scoring A* in all
              12 subjects.
            </p>
            <p>
              Awarded <strong>highest mark in Egypt</strong> for Advanced Subsidiary level
              Physics for the May/June 2017 Cambridge IGCSE examinations
            </p>
          </li>
          <li className='mb-5'>
            <h4>
              <u>German University in Cairo</u>
              <span className='years ms-2'>
                <em>Sep 2018 - May 2023</em>
              </span>
            </h4>
            <p>
              Media Engineering Technology faculty majoring in{' '}
              <strong>Computer Science and Engineering</strong> with a GPA of{' '}
              <strong>0.91 (A+)</strong>
            </p>
            <p>
              Ranked <strong>5th</strong> in the Computer Science and Engineering group
              (winter semester 2020/2021)
            </p>
            <p>
              Ranked <strong>16th</strong> in the Engineering group (winter semester
              2018/2019)
            </p>
          </li>
        </ul>
      </div>
    ),
    imageSrc: educationImage,
  },
  {
    id: 'skills',
    title: 'Skills',
    content: <div></div>,
    imageSrc: skillsImage,
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
  return sections.map((section, idx) => (
    <section key={section.id} className=''>
      <h2 className='display-5 title text-center pb-4'>{section.title}</h2>
      <div className='row align-items-center'>
        <div
          className={`content col-12 col-md-8 ${
            idx % 2 === 0 ? 'order-md-1' : 'order-md-2'
          }`}
        >
          {section.content}
        </div>
        <div className={`col-12 col-md-4 ${idx % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
          <img src={section.imageSrc} alt='illustration' />
        </div>
      </div>
    </section>
  ));
};

export default AboutMe;
