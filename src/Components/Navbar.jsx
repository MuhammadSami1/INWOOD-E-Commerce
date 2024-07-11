import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-100">
      <div className="flex justify-between items-center px-5 py-2 mx-auto max-w-6xl">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              src="./Images/logo.svg"
              alt="logo"
              style={{ width: "30px", height: "30px" }}
            />
          </Link>
          <Link to="/" className="text-sm md:text-lg libre-baskerville-regular">
            INWOOD
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center gap-3 mb-4 md:mb-0 text-CustomColor">
          <Link to="/" className="button">
            Home
          </Link>
          <Link to="/menu" className="button">
            Shop
          </Link>
          <Link to="/about" className="button">
            Product
          </Link>

          <Link to="/contact" className="button">
            Contact
          </Link>
        </div>
        <div className="hidden md:flex px-4 py-2 font-normal text-base rounded-3xl border border-black">
          <Link to="/contact">Reservation</Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={dropDown}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-3 pb-4">
            <Link to="/" className="button">
              Home
            </Link>
            <Link to="/menu" className="button">
              Menu
            </Link>
            <Link to="/about" className="button">
              About
            </Link>
            <Link to="/gallery" className="button">
              Gallery
            </Link>
            <Link to="/contact" className="button">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
