import { Link } from "react-router-dom";
import NavberLogo from "../../assets/images.png"
import UserImg from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navber = () => {

  const { user, logOut } = useContext(AuthContext);

  const navLinks = <>
    <li className="font-semibold"><Link to="/">Home</Link></li>
    <li className="font-semibold"><Link to="/addProduct">Add Product</Link></li>
    <li className="font-semibold"><Link to="/myCart">My Cart</Link></li>
  </>


  return (
    <div className="navbar bg-transparent max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link to="/"><img src={NavberLogo} width={85} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ?
            <div className="flex items-center">
              <a onClick={logOut} className="btn">LogOut</a>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ms-2 items-center">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || UserImg} />
                </div>
              </div>
            </div> :

            <Link to='/login'><a className="btn">Login </a></Link>
        }
      </div>
    </div>
  );
};

export default Navber;