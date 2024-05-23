import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-customColor-dark text-white py-8">
      <div className="container mx-auto text-center space-y-6">
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/" className="hover:text-customColor-orange">
            Home
          </Link>
          <Link to="/about" className="hover:text-customColor-orange">
            About Me
          </Link>
          <Link to="/services" className="hover:text-customColor-orange">
            Services
          </Link>
          <Link to="/projects" className="hover:text-customColor-orange">
            Projects
          </Link>
          <Link to="/testimonials" className="hover:text-customColor-orange">
            Testimonials
          </Link>
          <Link to="/contact" className="hover:text-customColor-orange">
            Contact
          </Link>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            className="hover:text-customColor-orange"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-customColor-orange"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-customColor-orange"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-customColor-orange"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="text-sm text-gray-400">
          &copy; 2024 All Rights Reserved by <br />
          <strong>Muhammad Taha</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
