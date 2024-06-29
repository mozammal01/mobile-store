import { Link } from 'react-router-dom';
import Navber from './Navber';
import AllProduct from '../AllProduct/AllProduct';

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
          <div>
            <h2 className="text-6xl mt-40">Welcome To Our Mobile Store</h2>
            <Link className='btn my-6' to="/addProduct">Add Product</Link>
          </div>
        </div>
      </div>
      <AllProduct></AllProduct>
    </>
  );
};

export default Home;