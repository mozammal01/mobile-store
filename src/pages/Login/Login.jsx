import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import Navber from "../Home/Navber";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const { signIn, googleLogin } = useContext(AuthContext);

  // Login
  const handleLogin = e => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // Sign In 
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Login Successfull",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(err => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error: ${err.message}`,
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      })
  }

  // Show Password
  const showPassword = () => {
    const password = document.getElementById('pass');

    if (password.type === 'password') {
      password.type = 'text'
    }
    else {
      password.type = 'password'
    }
  }


  // Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signed In",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error => {
        console.error(error);
      })
  }


  return (
    <>
      <Navber></Navber>
      <div className="hero min-h-screen bg-slate-200">
        <div className="card w-full bg-white max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered text-white" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered text-white" required id="pass" />
              <label className="flex justify-normal">
                <input onClick={showPassword} type="checkbox" /><span className="ms-2">Show Password</span>
              </label>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-red-600 font-bold text-base">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn">Login</button>
              <p className="text-base font-semibold mt-4">Do not have an account ? Please <Link to="/register" className="text-red-600 font-bold">Register</Link> </p>
            </div>
          </form>
          <div className="py-2 pb-10">
            <button onClick={handleGoogleLogin} className="w-10/12 mx-auto hover:bg-slate-950  hover:text-white  bg-slate-200 rounded-xl p-2 flex items-center justify-around">
              <FcGoogle className=" text-4xl me-2" />
              <p className="text-2xl font-semibold">Sign in With Google</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;