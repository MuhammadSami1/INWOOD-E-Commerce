import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ openCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-400 bg-opacity-80 py-2">
      <div className="flex justify-between items-center px-5 py-2 mx-auto max-w-6xl">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              src="./Images/logo.svg"
              alt="logo"
              style={{ width: "30px", height: "30px" }}
            />
          </Link>
          <Link
            to="/"
            className="text-xs md:text-lg libre-baskerville-regular text-CustomColor1"
          >
            INWOOD
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center text-xs md:text-lg gap-2 md:gap-8 text-CustomColor1 tracking-tight">
          <Link to="/" className="button">
            Home
          </Link>
          <Link to="/shop" className="button">
            Shop
          </Link>
          <Link to="/contact" className="button">
            Contact
          </Link>
          <Link to="/checkout" className="button">
            Check Out
          </Link>
        </div>
        <button
          style={{ width: "1.5rem", height: "1.5rem", position: "relative" }}
          className="hidden md:flex rounded-full"
          onClick={openCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="fill-CustomColor1"
          >
            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
          </svg>
          <div
            className="rounded-full bg-red-500 flex justify-center items-center"
            style={{
              color: "white",
              width: "1rem",
              height: "1rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            1
          </div>
        </button>
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
            <Link to="/shop" className="button">
              Shop
            </Link>
            <Link to="/contact" className="button">
              Contact
            </Link>
            <Link to="/checkout" className="button">
              Check out
            </Link>
            <button onClick={openCart} className="button">
              Cart
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
