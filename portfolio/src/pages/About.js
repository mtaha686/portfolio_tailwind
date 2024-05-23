import React from "react";
// import myImg from "../assets/images/myimg.svg";
const skills = [
  { name: "API Integration", level: "75%" },
  { name: "Web Design", level: "80%" },
  { name: "Front-end", level: "90%" },
  { name: "Back-end", level: "70%" },
];

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-customColor-dark text-white flex items-center justify-center p-3">
      <div className="bg-customColor-dark p-6 rounded-lg shadow-lg max-w-4xl w-full flex flex-col lg:flex-row items-center lg:space-x-6">
        {/* <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={myImg}
              alt="Muhammad Taha"
              className="rounded-full w-74 h-74 border-5 border-orange-500"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-orange-500"></div>
          </div>
        </div> */}
        <div className="flex-grow">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            About Me
          </h2>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, level }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{level}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-orange-500 h-2.5 rounded-full"
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
};

export default AboutMe;
