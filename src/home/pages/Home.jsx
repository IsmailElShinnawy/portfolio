import myImage from '../../assets/images/me-cropped.jpg';
import WhoAmI from '../components/WhoAmI';
import './Home.scss';

const Home = () => {
  return (
    <main className='container mt-5'>
      <section className='about-me row'>
        <div className='col-12 col-md-6 order-2 order-md-1 text-center text-md-start d-block d-md-flex align-items-center'>
          <WhoAmI />
        </div>
        <div className='col-12 col-md-6 order-1 order-md-2 d-flex d-md-block justify-content-center mb-4 mb-md-0'>
          <img src={myImage} alt='Ismail' className='my-image shadow' />
        </div>
      </section>
    </main>
  );
};

export default Home;
