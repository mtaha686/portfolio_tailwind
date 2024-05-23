import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import "../assets/css/home.css";

const Home = () => {
  return (
    <div className="main-home-container">
      <div className="grid-item introduction">
        <p>
          <strong>
            Hi there 👋! <br /> I am Muhammad Taha,
          </strong>{" "}
          <br />
          <span> </span> <br />
          I'm passionate about creating impactful software solutions and
          leveraging data to drive insights. Let's connect and explore how I can
          contribute to your team.
        </p>{" "}
        <br />
        <p>
          <button type="btn btn-primary">Let's talk 🎙</button>
        </p>
      </div>
      <div className="grid-item image">
        <div className="my-image"></div>
      </div>
      <div className="grid-item social-links">
        <a
          href="https://www.facebook.com/mtahamuhammadi/"
          className="social-icon social-icon-fb"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/mtahamuhammadi/"
          className="social-icon social-icon-insta"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="www.linkedin.com/in/mtaha686"
          className="social-icon social-icon-linkedin"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/muhammad686/"
          className="social-icon social-icon-github"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/@mtcodes"
          className="social-icon social-icon-youtube"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://twitter.com/mtm_686"
          className="social-icon social-icon-twitter"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Home;
