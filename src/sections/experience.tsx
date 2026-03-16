import React from "react";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";
const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "AI Developer Intern",
      company: "Softacular Co.,Ltd",
      location: "Nakhon Pathom, Thailand",
      period: "July 2025 - Oct 2025",
      description: [
        "Developed Thai ID OCR system using YOLO and Flask for automated data extraction.",
        "Engineered RAG-based enterprise chatbot with vector database and prompt engineering.",
        "Developed full-stack features using Next.js, Flask, and PostgreSQL for internal knowledge.",
      ],
      technologies: [
        "Python",
        "Large Language Model (LLM)",
        "Langchain",
        "Machine Learning",
        "YOLO",
        "Next.js",
      ],
    },
    // {
    //   id: 2,
    //   title: 'Web Developer',
    //   company: 'Digital Solutions LLC',
    //   location: 'Seattle, WA',
    //   period: 'Mar 2018 - Dec 2019',
    //   description: [
    //     'Developed responsive web applications for various clients',
    //     'Built RESTful APIs using Node.js and Express',
    //     'Implemented authentication systems and database integrations',
    //     'Optimized website performance and loading speed',
    //   ],
    //   technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS'],
    // },
    // {
    //   id: 3,
    //   title: 'Junior Developer',
    //   company: 'StartUp Innovations',
    //   location: 'Portland, OR',
    //   period: 'Jun 2016 - Feb 2018',
    //   description: [
    //     'Assisted in building web applications using JavaScript and jQuery',
    //     'Implemented responsive designs from Figma mockups',
    //     'Fixed bugs and improved existing features',
    //     'Participated in daily stand-ups and sprint planning',
    //   ],
    //   technologies: ['JavaScript', 'jQuery', 'HTML/CSS', 'Bootstrap', 'PHP'],
    // },
  ];
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey as a developer, showcasing my growth and the
            impactful roles I've held.
          </p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                <div
                  className={`md:flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Date for mobile */}
                  <div className="md:hidden flex items-center mb-4 text-blue-600">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center mb-2">
                        <BriefcaseIcon
                          size={16}
                          className="text-blue-600 mr-2"
                        />
                        <span className="text-gray-700">{exp.company}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <MapPinIcon size={16} className="text-blue-600 mr-2" />
                        <span className="text-gray-600">{exp.location}</span>
                      </div>
                      <div className="hidden md:flex items-center mb-4 text-blue-600">
                        <CalendarIcon size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Empty div for layout */}
                  <div className="hidden md:block md:w 1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
                <div className="flex items-center mt-2 text-gray-700">
                  <MapPinIcon size={16} className="text-blue-600 mr-2" />
                  <span>Mahasarakham University</span>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0 text-blue-600">
                <CalendarIcon size={16} className="mr-2" />
                <span>Graduated 2025</span>
              </div>
            </div>
            
            <p className="text-gray-600 mt-4">
              Focused on software engineering, artificial intelligence, and data structures.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            title="Coming soon"
            className="inline-block px-6 py-3 bg-white border border-gray-300 text-gray-400 font-medium rounded-md cursor-not-allowed transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
