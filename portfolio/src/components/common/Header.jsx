import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-customColor-dark text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/">
          <img src={logo} alt="MT" className="w-12 h-auto" />
        </Link>
        <div className="hidden lg:flex space-x-4">
          <Link
            to="/"
            className=" hover:text-customColor-orange px-2 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-customColor-orange px-2 py-2 rounded"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-customColor-orange px-2 py-2 rounded"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="hover:text-customColor-orange px-2 py-2 rounded"
          >
            Projects
          </Link>
          <Link
            to="/testemonials"
            className="hover:text-customColor-orange px-2 py-2 rounded"
          >
            Testemonials
          </Link>
          <Link
            to="/contact"
            className="hover:text-customColor-orange px-2 py-2 rounded"
          >
            Contact
          </Link>
          <a
            href="/path-to-your-cv.pdf"
            className="bg-customColor-orange  text-white px-3 py-2  hover:bg-customColor-dark hover:text-customColor-orange rounded"
            download
          >
            Download CV
          </a>
        </div>
        <button className="lg:hidden" onClick={toggleDrawer}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={`lg:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="px-6 pb-4 space-y-2">
          <Link
            to="/"
            className="block lg:hidden hover:text-customColor-orange px-2 py-2 rounded px-2 py-2 rounded"
            onClick={toggleDrawer}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-customColor-orange px-2 py-2 rounded px-2 py-2 rounded"
            onClick={toggleDrawer}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block hover:text-customColor-orange px-2 py-2 rounded px-2 py-2 rounded"
            onClick={toggleDrawer}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="block hover:text-customColor-orange px-2 py-2 rounded px-2 py-2 rounded"
            onClick={toggleDrawer}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block hover:text-customColor-orange px-2 py-2 rounded px-2 py-2 rounded"
            onClick={toggleDrawer}
          >
            Contact
          </Link>
          <a
            href="/path-to-your-cv.pdf"
            className="block lg:hidden bg-customColor-orange text-white px-3 py-2 hover:bg-customColor-dark hover:text-customColor-orange"
            download
            onClick={toggleDrawer}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
