import React from "react";
import {
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  LayoutIcon,
  SettingsIcon,
  BrainIcon,
} from "lucide-react";

const SkillsSection = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ];

  const backendSkills = [
    "Python",
    "Node.js",
    ".NET",
    "Flask",
    "Django",
    "ASP.NET",
    "REST API",
    "Firebase",
  ];

  const machineLearningSkills = [
    "LangChain",
    "HuggingFace",
    "InsightFace",
    "scikit-learn",
    "TensorFlow",
    "Keras",
  ];

  const domainKnowledge = [
    "OCR",
    "NLP",
    "Face Recognition",
    "Retrieval-Augmented Generation (RAG)",
    "Prompt Engineering",
  ];


  const otherSkills = ["Performance Optimization"];

  const skillCard = (title: string, icon: React.ReactNode, skills: string[]) => (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-100 rounded-lg mr-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the core technologies and areas I've focused on in
            development and AI engineering.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCard(
            "Frontend Development",
            <LayoutIcon size={24} className="text-blue-600" />,
            frontendSkills
          )}
          {skillCard(
            "Backend Development",
            <ServerIcon size={24} className="text-blue-600" />,
            backendSkills
          )}
          {skillCard(
            "Machine Learning & AI",
            <BrainIcon size={24} className="text-blue-600" />,
            machineLearningSkills
          )}
          {skillCard(
            "Domain Knowledge",
            <CodeIcon size={24} className="text-blue-600" />,
            domainKnowledge
          )}
          {skillCard(
            "Other Skills",
            <SettingsIcon size={24} className="text-blue-600" />,
            otherSkills
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
