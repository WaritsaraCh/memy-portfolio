import React, { useState } from "react";
import { ExternalLinkIcon, GithubIcon, CodeIcon } from "lucide-react";
const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured online store with product management, cart functionality, and payment processing.",
      image: "src/assets/cover/alice.png",
      tags: ["Next.js", "Tailwind CSS"],
      category: "frontend",
      liveLink: "https://alice-furniture-web.vercel.app/",
      githubLink: "https://github.com/WaritsaraCh/alice-furniture-web.git",
    },
    {
      id: 2,
      title: "Daily Task App",
      description:
        "A productivity tool for organizing tasks with drag-and-drop functionality and team collaboration features.",
      image: "src/assets/cover/dailytasks.png",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      category: "frontend",
      liveLink: "https://react-daily-tasks.vercel.app/",
      githubLink: "https://github.com/WaritsaraCh/React-Daily-tasks",
    },
    {
      id: 3,
      title: "Lumière | Contemporary Art",
      description:
        "An elegant platform showcasing contemporary art with a sophisticated aesthetic.",
      image: "src/assets/cover/art-gallery.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "frontend",
      liveLink: "https://art-gallery-website-ten-hazel.vercel.app/",
      githubLink: "https://github.com/WaritsaraCh/art-gallery-website.git",
    },
    {
      id: 4,
      title: "Real-time Facial Recognition System",
      description:
        "A high-performance computer vision pipeline utilizing MediaPipe for precise face detection and InsightFace for robust identity verification and feature extraction.",
      image: "src/assets/cover/face-recognition-cover.png", 
      tags: ["Python", "MediaPipe", "InsightFace", "OpenCV"],
      category: "ai-vision",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: 'Demo Simple RAG Chatbot',
      description: '',
      image: '',
      tags: ['Python', 'Large Language Model (LLM)', 'Langchain', 'Vector Database', 'Prompt Engineering'],
      category: 'ai-vision',
      liveLink: '#',
      githubLink: '#'
    }, 
    // {
    //   id: 6,
    //   title: 'API Service Platform',
    //   description: 'A RESTful API service with authentication, rate limiting, and comprehensive documentation.',
    //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80',
    //   tags: ['Node.js', 'Express', 'JWT', 'Swagger'],
    //   category: 'backend',
    //   liveLink: '#',
    //   githubLink: '#'
    // }
  ];
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  const filters = [
    {
      id: "all",
      label: "All Projects",
    },
    {
      id: "frontend",
      label: "Frontend",
    },
    {
      id: "backend",
      label: "Backend",
    },
    {
      id: "fullstack",
      label: "Full Stack",
    },
    {
      id: "ai-vision",
      label: "AI & Vision",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === filter.id ? "bg-blue-600 text-white" : "bg-transparent text-gray-600 hover:bg-gray-200"}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLinkIcon size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <GithubIcon size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
          >
            <CodeIcon size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
