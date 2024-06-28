import AllProduct from '../AllProduct/AllProduct';
import Navber from './Navber';

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen text-center  bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url('src/assets/mobile-store-banner.png')"
        }}
      >
        <div className='text-white'>
          <Navber></Navber>
        </div>
      </div>
      <AllProduct></AllProduct>
    </>
  );
};

export default Home;