import React from "react";

const Contact = () => {
  return (
    <section className="bg-customColor-dark text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's work Together
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full md:w-1/3 p-4 rounded text-black"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-customColor-orange text-white px-6 py-4 rounded font-bold hover:bg-orange-600"
          >
            Contact Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
