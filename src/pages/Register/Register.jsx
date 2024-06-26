import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Navber from "../Home/Navber";

const Register = () => {

  const { createUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // const user = { fName, lName, email, password };

    const upperCaseLetters = /[A-Z]/g;
    const specialCharacter = /[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/;

    // Validate capital letters
    if (password.length < 6) {
      Swal.fire("Password Must be 6 Character!");
    }
    else if (!password.match(upperCaseLetters)) {
      Swal.fire("You must use a capital letter!");
    }
    else if (!password.match(specialCharacter)) {
      Swal.fire("You must use a spectial character!");
    }


    if (password.length > 6 && password.match(upperCaseLetters) && password.match(specialCharacter)) {
      // Firebase User
      createUser(email, password)
        .then(result => {
          console.log(result.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Registretion Successfull",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(error => {
          console.error(error);
        })

    }

  }



  return (
    <>
    
      
    <Navber></Navber>
    <div className="hero min-h-screen bg-slate-200">
      <div className="card w-full bg-white max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-semibold">First Name</span>
            </label>
            <input type="text" name="fName" placeholder="First Name" className="input input-bordered text-white" required />

            <label className="label">
              <span className="label-text text-black font-semibold">Last Name</span>
            </label>
            <input type="text" name="lName" placeholder="Last Name" className="input input-bordered text-white" required />

            <label className="label">
              <span className="label-text text-black font-semibold">Email</span>
            </label>
            <input type="email" name="email" placeholder="Email" className="input input-bordered text-white" required />

            <label className="label">
              <span className="label-text text-black font-semibold">Password</span>
            </label>
            <input type="password" name="password" placeholder="Password" className="input input-bordered text-white" required id="pass" />

          </div>
          <div className="form-control mt-6">
            <button className="btn">Register</button>
            <p className="text-base font-semibold mt-4">Already have an account ? Please <Link to="/login" className="text-green-600 font-bold">Login</Link> </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;