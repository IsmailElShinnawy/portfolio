import React from 'react';
import educationIcon from '../../assets/images/award-line.svg';
import experienceIcon from '../../assets/images/user-star-line.svg';

import './EducationAndExperience.scss';

const EducationAndExperience = () => {
  return (
    <div className='education-and-experience'>
      <div className='row'>
        <div className='col d-flex'>
          <div className='p-3 icon d-flex align-items-center justify-content-center'>
            <img src={educationIcon} alt='education icon' width='30px' height='30px' />
          </div>
        </div>
        <div className='col d-flex'>
          <div className='p-3 icon d-flex align-items-center justify-content-center'>
            <img src={experienceIcon} alt='experience icon' width='30px' height='30px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
