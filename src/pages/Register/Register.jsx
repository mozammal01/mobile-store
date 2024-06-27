import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Navber from "../Home/Navber";
import { FcGoogle } from "react-icons/fc";


const Register = () => {

  const { createUser, googleLogin } = useContext(AuthContext);

  // Register
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
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error: ${err.message}`,
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      })
  }



  return (
    <>
      <Navber></Navber>
      <div className="hero min-h-screen  p-10 bg-slate-200">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-white ">
          <form onSubmit={handleRegister} className="card-body rounded-lg">
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

              <label className="flex justify-normal">
                <input onClick={showPassword} type="checkbox" /><span className="ms-2">Show Password</span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn">Register</button>
              <p className="text-base font-semibold mt-4">Already have an account ? Please <Link to="/login" className="text-green-600 font-bold">Login</Link> </p>
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

export default Register;