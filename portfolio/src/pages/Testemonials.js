import React, { useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "John Doe",
      title: "CEO",
      quote:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image: "https://via.placeholder.com/100",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      quote:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.",
      image: "https://via.placeholder.com/100",
      description:
        "Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
    },
    {
      name: "Michael Johnson",
      title: "COO",
      quote:
        "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.",
      image: "https://via.placeholder.com/100",
      description:
        "Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="bg-customColor-dark text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
        <div className="text-gray-400 mb-8 max-w-lg mx-auto">
          {testimonials.length > 0 && (
            <p>{testimonials[currentSlide].description}</p>
          )}
        </div>
        <div className="flex flex-col items-center space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white text-black p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/2 ${
                index === currentSlide ? "" : "hidden"
              }`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                <span className="text-orange-500 text-3xl leading-none">“</span>
                {testimonial.quote}
                <span className="text-orange-500 text-3xl leading-none">”</span>
              </p>
            </div>
          ))}
          <div className="flex space-x-2">
            <span
              className="w-3 h-3 bg-gray-500 rounded-full inline-block cursor-pointer"
              onClick={prevSlide}
            ></span>
            <span
              className="w-3 h-3 bg-customColor-orange rounded-full inline-block cursor-pointer"
              onClick={nextSlide}
            ></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full inline-block"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
