import React, { useState, useEffect } from 'react';

import './WhoAmI.scss';

const WhoAmI = () => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const roles = [
      'a Computer Engineering Student',
      'a Software Engineer',
      'a Competitive Programmer',
      'a Tech Enthusiast',
      'a Traveller',
    ];
    let currentCharIdx = 0;
    let currentRoleIdx = 0;
    let timeout;
    const type = () => {
      if (currentCharIdx === roles[currentRoleIdx].length) {
        currentCharIdx = 0;
        currentRoleIdx++;
        timeout = setTimeout(() => {
          setCurrentText('');
          if (currentRoleIdx === roles.length) {
            currentRoleIdx = 0;
          }
          type();
        }, 1000);
        return;
      }
      setCurrentText(
        oldCurrentText => oldCurrentText + roles[currentRoleIdx][currentCharIdx]
      );
      currentCharIdx++;
      setTimeout(type, 200);
    };
    type();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className='whoAmI'>
      <h2 className=''>Hola &#128075;, I'm</h2>
      <div className='display-2 my-name'>
        <strong>Ismail El Shinnawy</strong>
      </div>
      <div className='display-4 roles' id='whoAmI'>
        <span>{'& I am '}</span>
        <span className='current-role'>{currentText}</span>
      </div>
    </div>
  );
};

export default WhoAmI;
