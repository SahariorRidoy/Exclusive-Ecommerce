import React from "react";
import { Link, NavLink } from "react-router-dom";
import searchIcon from '../../assets/search.png'
import wishlist from '../../assets/Wishlist.png'
import cart from '../../assets/Cart1 with buy.png'
const Navbar = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-4">
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Contact</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Sign Up</NavLink>
            <Link to="/">
              <p className="btn bg-[#469ee2] text-white text-xl">Login</p>
            </Link>
            <Link to="/">
              <p className="btn bg-[#469ee2] text-white text-xl">Register</p>
            </Link>
          </ul>
        </div>
        <Link to="/" className="btn px-0 btn-ghost text-lg lg:text-2xl">
          Exclusive
        </Link>
      </div>




      <div className="navbar-center hidden lg:flex mr-80">
        <ul className="menu menu-horizontal px-1 space-x-5 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline text-base font-normal leading-6"
                : " text-base font-normal leading-6"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
                isActive
                  ? "underline text-base font-normal leading-6"
                  : "text-base font-normal leading-6"
              }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive
                  ? "underline text-base font-normal leading-6"
                  : "text-base font-normal leading-6"
              }
          >
            About
          </NavLink>
          <NavLink
            to="/sign-up"
            className={({ isActive }) =>
                isActive
                  ? "underline text-base font-normal leading-6"
                  : "text-base font-normal leading-6"
              }
          >
            Sign Up
          </NavLink>
          
        </ul>
      </div>
        <div className="navbar-end flex gap-6 items-center">
           <div className="flex gap-8 items-center">
            <input className="text-xs leading-4 focus:outline-none opacity-70 py-2" placeholder="What are you looking for?"/>
            <img src={searchIcon} alt="" />
           </div>
           <div className="flex gap-4">
            <img src={wishlist} alt="" />
            <img src={cart} alt="" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
