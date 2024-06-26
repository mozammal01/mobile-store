import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import Navber from "../Home/Navber";

const Login = () => {

  const { signIn } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password }

    // 
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
      .catch(error => {
        console.error(error);
      })

    console.log(user);
    // console.log(app)
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
              <input type="password" name="password" placeholder="Password" className="input input-bordered text-white" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-red-600 font-bold text-base">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn">Login</button>
              <p className="text-base font-semibold mt-4">Do not have an account ? Please <Link to="/register" className="text-red-600 font-bold">Register</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;