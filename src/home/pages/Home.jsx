import myImage from '../../assets/images/me-cropped.jpg';
import AboutMe from '../components/AboutMe';
import WhoAmI from '../components/WhoAmI';
import githubIcon from '../../assets/images/github-fill.svg';
import twitterIcon from '../../assets/images/twitter-fill.svg';
import linkedInIcon from '../../assets/images/linkedin-box-fill.svg';

import './Home.scss';

const Home = () => {
  return (
    <main className='container mt-5'>
      <section className='about-me-section'>
        <div className='row'>
          <div className='col-12 col-md-7 order-2 order-md-1 text-center text-md-start d-block d-md-flex flex-column justify-content-center'>
            <WhoAmI />
            <div className='mt-3 social-links'>
              <a
                href='https://github.com/IsmailElShinnawy'
                target='_blank'
                rel='noreferrer'
              >
                <img src={githubIcon} alt='github' className='me-2' />
              </a>
              <a
                href='https://linkedin.com/in/ismail-elshennawy/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={linkedInIcon} alt='linkedIn' className='mx-2' />
              </a>
              <a
                href='https://twitter.com/IsmailShinnawy'
                target='_blank'
                rel='noreferrer'
              >
                <img src={twitterIcon} alt='twitter' className='ms-2' />
              </a>
            </div>
          </div>
          <div className='col-12 col-md-5 order-1 order-md-2 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0'>
            <img src={myImage} alt='Ismail' className='my-image shadow' />
            <div className='d-flex'></div>
          </div>
        </div>
        <div className='d-flex mt-5'>
          <AboutMe />
        </div>
      </section>
    </main>
  );
};

export default Home;
