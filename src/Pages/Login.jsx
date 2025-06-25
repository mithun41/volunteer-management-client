import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import SocialLogin from "../utils/SocialLogin";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { logInUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
        // console.log(result.user);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <SocialLogin></SocialLogin>
            <form onSubmit={handleLogIn}>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <p className="text-sm  dark:text-gray-600">
                  Don'tz have an account?
                  <Link
                    to={"/register"}
                    rel="noopener noreferrer"
                    href="#"
                    className="ml-2  underline dark:text-violet-600"
                  >
                    Register
                  </Link>
                </p>
              </div>
              <button className="btn btn-neutral w-full mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
