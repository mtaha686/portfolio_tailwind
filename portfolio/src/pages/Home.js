import React from "react";
import myImg from "../assets/images/bgimg.svg";

const Home = () => {
  return (
    <section className="bg-customColor-dark text-white min-h-screen flex items-center pb-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-8 py-2">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Hi there{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
            !
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            I am Muhammad Taha,
          </h2>
          <p className="text-orange-500 text-2xl lg:text-3xl font-bold mb-4">
            A Full stack <br />
            Web Developer & Data Scientist
          </p>
          <p className="mb-8 text-lg lg:text-xl">
            I'm passionate about creating impactful software solutions and
            leveraging data to drive insights. Let's connect and explore how I
            can contribute to your team.
          </p>
          <button className="bg-transparent border border-orange-500 text-orange-500 py-2 px-6 rounded-full text-lg hover:bg-orange-500 hover:text-white transition duration-300">
            Let's talk{" "}
            <span role="img" aria-label="talk">
              📞
            </span>
          </button>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="rounded-full border-5 border-orange-500">
              <div className="rounded-full border-5 border-orange-500">
                <img
                  src={myImg}
                  alt="Muhammad Taha"
                  className="rounded-full w-99 h-99 border-5 border-orange-500" // Increased size and adjusted object-fit
                />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-orange-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
