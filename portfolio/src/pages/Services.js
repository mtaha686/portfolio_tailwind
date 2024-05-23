import React from "react";

const services = [
  {
    title: "API Integration",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "🔌",
  },
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "🎨",
  },
  {
    title: "Back-end",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "📱",
  },
  {
    title: "Front-end",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "💻",
  },
];

const Services = () => {
  return (
    <section className="bg-customColor-dark text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl text-black font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
