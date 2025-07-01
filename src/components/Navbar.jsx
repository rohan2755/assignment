import React, { useState } from "react";
import logo from "../assets/logo.png";
import pic1 from "../assets/pic2.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden lg:flex bg-[oklch(0.19_0_0)] w-64 min-h-screen flex-col p-4 border-r border-gray-700">
        <div className="mb-8 mx-auto">
          <img className="w-32 h-12 object-contain" src={logo} alt="Logo" />
        </div>

        <div className="relative p-0.5 w-full max-w-[200px] mx-auto rounded-full bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 via-red-400 via-pink-400 to-purple-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 mb-8">
          <button className="bg-[oklch(0.19_0_0)] text-white font-semibold w-full py-3 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wider text-sm">
            CONTACT US
          </button>
        </div>

        <div className="flex flex-col space-y-4 mb-8 w-full max-w-[200px] mx-auto">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm"
          >
            App Development
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm"
          >
            Challenges
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm"
          >
            Hire Developer
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm"
          >
            Community
          </a>
        </div>

        <div className="rounded-lg p-4 max-w-[200px] mx-auto">
          <div className="flex flex-col mb-4">
            <div className="w-full mb-4">
              <img
                src={pic1}
                alt="Workspace"
                className="w-full h-32 rounded object-cover"
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDIwMCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTI4IiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik04NSA1NEg5NVY2NEg4NVY1NFoiIGZpbGw9IiM2QjczODAiLz4KPC9zdmc+";
                }}
              />
            </div>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Enim tempor posuere
              rutrum.
            </p>
          </div>
        </div>
      </nav>

      <div className="lg:hidden bg-[oklch(0.19_0_0)] p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <div>
          <img className="w-24 h-10 object-contain" src={logo} alt="Logo" />
        </div>

        <button
          className="text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-[oklch(0.19_0_0)] bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div className="lg:hidden fixed left-0 top-0 w-64 h-full bg-[oklch(0.19_0_0)] z-50 p-6 flex flex-col">

            <div className="flex justify-between items-center mb-8">
              <img className="w-24 h-10 object-contain" src={logo} alt="Logo" />
              <button
                className="text-white p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col space-y-6 mb-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                App Development
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                Challenges
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                Hire Developer
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              >
                Community
              </a>
            </div>

            <div className="relative p-0.5 w-full max-w-[200px] mx-auto rounded-full bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 via-red-400 via-pink-400 to-purple-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 mb-8">
              <button className="bg-[oklch(0.19_0_0)] text-white font-semibold w-full py-3 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wider text-sm">
                CONTACT US
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
