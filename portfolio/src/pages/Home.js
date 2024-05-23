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
    </div>
  );
};

export default Home;
