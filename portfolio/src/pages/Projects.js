import React from "react";

const projects = [
  {
    id: 1,
    category: "Web Design",
    title: "Project-1",
    description: "Design-1",
    image: "path_to_your_image1", // replace with your image path
  },
  {
    id: 2,
    category: "Web Design",
    title: "Project-2",
    description: "Design-2",
    image: "path_to_your_image2", // replace with your image path
  },
  {
    id: 3,
    category: "Web Design",
    title: "Project-3",
    description: "Design-3",
    image: "path_to_your_image3", // replace with your image path
  },
];

const categories = [
  "All",
  "API Integration",
  "Web Design",
  "Back-end",
  "Front-end",
];

const MyProjects = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-customColor-dark text-white p-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus.
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl text-black font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-orange-500 mb-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
