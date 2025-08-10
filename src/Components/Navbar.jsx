import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import ThemeToggle from "../utils/ThemeToggle";
import logo from "/1.png";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const menu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to={"/add-volunteer"}>Add Volunteer Need Post</NavLink>
        </li>
      )}

      <li>
        <NavLink to={"/all-posts"}>All Volunteer Need Posts</NavLink>
      </li>

      {/* Hover Dropdown */}
      {user && (
        <li className="relative group">
          <span className="cursor-pointer flex items-center gap-1">
            My Posts <IoIosArrowDown className="mt-[2px]" />
          </span>
          <ul className="absolute z-50 hidden group-hover:flex flex-col bg-base-100 dark:bg-gray-800 rounded-md shadow-lg p-2  w-56">
            <li>
              <NavLink to="/my-posts">My Volunteer Need Post</NavLink>
            </li>
            <li>
              <NavLink to="/my-requests">My Volunteer Request Post</NavLink>
            </li>
          </ul>
        </li>
      )}
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser();
  };
  return (
    <div className="sticky top-0 z-50 bg-[#66AFF7] dark:bg-gray-800 shadow-md">
      <div className="navbar bg-[#66AFF7] dark:bg-gray-800 dark:text-white  lg:w-11/12 lg:mx-auto">
        <div className="navbar-start ">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow dark:bg-gray-800 dark:text-white"
            >
              {menu}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="w-16 ">
              <img src={logo} className="rounded-full" alt="" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8">{menu}</ul>
        </div>

        <div className="navbar-end">
          <ThemeToggle></ThemeToggle>
          {user ? (
            <>
              <div className="relative group inline-block">
                {user?.photoURL ? (
                  <img
                    className="w-12 rounded-full mr-6"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserCircle className="mr-5" size={25} />
                )}

                <span className="absolute -left-4  z-10 bg-white text-black px-3 rounded shadow-lg text-sm hidden group-hover:block top-22">
                  {user.displayName}
                </span>
                <Link
                  to={"/login"}
                  onClick={handleSignOut}
                  className="btn  z-10 w-[90px] -ml-4 absolute hidden group-hover:block pt-2 "
                >
                  Sign Out
                </Link>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link
                to={"/login"}
                className="btn btn-outline btn-success dark:text-white dark:border-white text-black border-black mr-4"
              >
                Sign In
              </Link>
              <Link
                to={"/register"}
                className="btn btn-outline btn-success  text-black border-black dark:text-white dark:border-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
