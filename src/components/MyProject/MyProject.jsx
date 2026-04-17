"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const MyProject = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const iconJs =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
  const iconReact =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
  const iconNode =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
  const iconMongo =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";

  const projects = [
    {
      title: "Full Stack Project",
      description:
        "A brief description of the project, highlighting its features and technologies used.",
      image: "https://picsum.photos/seed/picsum/536/354",
      type: "Full Stack",
      techStack: [iconJs, iconReact, iconNode, iconMongo],
    },
    {
      title: "Frontend Project",
      description:
        "A brief description of the project, highlighting its features and technologies used.",
      image: "https://picsum.photos/seed/picsum/536/354",
      type: "Frontend",
      techStack: [iconJs, iconReact],
    },
    {
      title: "Backend Project",
      description:
        "A brief description of the project, highlighting its features and technologies used.",
      image: "https://picsum.photos/seed/picsum/536/354",
      type: "Backend",
      techStack: [iconJs, iconNode, iconMongo],
    },
    {
      title: "Full Stack Project",
      description:
        "A brief description of the project, highlighting its features and technologies used.",
      image: "https://picsum.photos/seed/picsum/536/354",
      type: "Full Stack",
      techStack: [iconJs, iconReact, iconNode, iconMongo],

    },
    {
      title: "Frontend Project",
      description:
        "A brief description of the project, highlighting its features and technologies used.",
      image: "https://picsum.photos/seed/picsum/536/354",
      type: "Frontend",
      techStack: [iconJs, iconReact],
    },
    {
      title: "Backend Project",
      description:
        "A brief description of the project, highlighting its features and technologies used.",
      image: "https://picsum.photos/seed/picsum/536/354",
      type: "Backend",
      techStack: [iconJs, iconNode, iconMongo],
    },
    {
      title: "Full Stack Project",
      description:
        "A brief description of the project, highlighting its features and technologies used.",
      image: "https://picsum.photos/seed/picsum/536/354",
      type: "Full Stack",
      techStack: [iconJs, iconReact, iconNode, iconMongo],
    },
    {
      title: "Frontend Project",
      description:
        "A brief description of the project, highlighting its features and technologies used.",
      image: "https://picsum.photos/seed/picsum/536/354",
      type: "Frontend",
      techStack: [iconJs, iconReact],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <>
      <div id="myproject" className="py-14 max-w-5xl mx-auto  scroll-mt-16">
        <div>
          <h3 className="text-primary text-3xl font-bold">
            &lt;My Projects /&gt;
          </h3>
        </div>
        <div className="flex gap-1 mt-5 text-sm">
          <button
            className={`border border-gray-500 px-4 py-0.5 rounded-full hover:bg-gray-500 hover:text-white duration-300 active:scale-95 cursor-pointer ${
              activeFilter === "All" ? "bg-gray-400 text-white" : ""
            }`}
            onClick={() => setActiveFilter("All")}
          >
            All
          </button>
          <button
            className={`border border-gray-500 px-4 py-0.5 rounded-full hover:bg-gray-500 hover:text-white duration-300 active:scale-95 cursor-pointer ${
              activeFilter === "Full Stack" ? "bg-gray-400 text-white" : ""
            }`}
            onClick={() => setActiveFilter("Full Stack")}
          >
            Full Stack
          </button>
          <button
            className={`border border-gray-500 px-4 py-0.5 rounded-full hover:bg-gray-500 hover:text-white duration-300 active:scale-95 cursor-pointer ${
              activeFilter === "Frontend" ? "bg-gray-400 text-white" : ""
            }`}
            onClick={() => setActiveFilter("Frontend")}
          >
            Frontend
          </button>
          <button
            className={`border border-gray-500 px-4 py-0.5 rounded-full hover:bg-gray-500 hover:text-white duration-300 active:scale-95 cursor-pointer ${
              activeFilter === "Backend" ? "bg-gray-400 text-white" : ""
            }`}
            onClick={() => setActiveFilter("Backend")}
          >
            Backend
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl p-6 hover:scale-105 duration-300 hover:bg-neutral-800"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt="Project Screenshot"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
              <div className="flex justify-between items-center my-4">
                <h4 className="text-sm font-semibold">{project.title}</h4>
                <div className="flex gap-2 items-center">
                  <button className="text-[15px] border border-gray-200 hover:bg-gray-200 hover:text-black px-2 py-0.5 rounded-xl text-sm cursor-pointer duration-300 active:scale-95">
                    Live Demo
                  </button>
                  <div className="text-xl cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white duration-300 active:scale-95">
                    <FaGithub />
                  </div>
                </div>
              </div>
              <p className="text-gray-600  text-sm">
                {project.description}
              </p>

              <div className="flex items-center gap-2 mt-4">
                {project.techStack.map((tech, idx) => (
                  <img
                    key={idx}
                    src={tech}
                    alt="Tech Icon"
                    className="w-4 h-4 object-contain"
                  />
                ))}

              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 3 ? (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className=" border border-gray-400 dark:border-gray-700 text-gray-400 dark:text-white px-4 py-2 rounded-full hover:scale-110 duration-300 active:scale-100 cursor-pointer"
            >
              {showAll ? "See Less..." : "See More..."}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MyProject;
