import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-gray-100 fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="flex items-center text-teal-600" href="#">
            <span className="sr-only">Home</span>
            <NavLink to="/">
              <img
                className="w-12 h-12 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GaZc1eljsGsJbW9h06nxf7zTiEEuYpjf4A&s"
                alt="Logo"
              />
            </NavLink>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:flex space-x-6">
              <NavLink
                className="text-gray-700 hover:text-teal-600 font-medium ml-8"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="text-gray-700 hover:text-teal-600 font-medium"
                to="/product"
              >
                Product
              </NavLink>
              <NavLink
                className="text-gray-700 hover:text-teal-600 font-medium"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="text-gray-700 hover:text-teal-600 font-medium"
                to="/admin"
              >
                Admin
              </NavLink>
            </nav>

            <div className="relative ml-4">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="border border-gray-300 bg-white h-10 pl-5 pr-10 rounded-full text-sm shadow-sm focus:outline-none focus:border-teal-600"
              />
              <button className="absolute top-0 right-0 mt-2 mr-2">
                <svg
                  className="h-4 w-4 fill-current text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 111.41-1.41l5.28 5.29-1.41 1.41-5.28-5.29zm-1.9-5.32a6 6 0 100-12 6 6 0 000 12z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-4 ml-4">
              <NavLink
                className="hidden sm:inline-block bg-teal-600 text-white rounded-full px-4 py-2 text-sm font-medium transition hover:bg-teal-700"
                to="/register"
              >
                Đăng ký
              </NavLink>
              <NavLink
                className="hidden sm:inline-block bg-gray-700 text-white rounded-full px-4 py-2 text-sm font-medium transition hover:bg-gray-800"
                to="/login"
              >
                Đăng Nhập
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
