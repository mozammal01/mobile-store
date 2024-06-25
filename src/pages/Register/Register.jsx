import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-slate-200">
      <div className="card w-full bg-white max-w-sm shrink-0 shadow-2xl">
        <form className="card-body  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-semibold">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered text-white" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-semibold">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered text-white" required />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn">Register</button>
            <p className="text-base font-semibold mt-4">Already have an account ? Please <Link to="/login" className="text-green-600 font-bold">Login</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;