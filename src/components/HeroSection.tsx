import {
  ArrowRightIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
// import profile2 from "../assets/profile2.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium text-sm">
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Waritsara
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
              Junior Developer (New graduate)
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              I craft exceptional digital experiences with clean code and
              thoughtful design. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                View My Work
                <ArrowRightIcon
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-200 text-center"
              >
                Get In Touch
              </a>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                {
                  icon: GithubIcon,
                  href: "https://github.com/WaritsaraCh",
                },
                {
                  icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/waritsara-chaiyamong-277101373/",
                },
                {
                  icon: FacebookIcon,
                  href: "#",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                >
                  <social.icon size={20} className="text-gray-700" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src='https://i.pinimg.com/474x/5d/a3/60/5da360c98b9af0ad709fe18606992229.jpg'
                  alt="Developer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-2xl shadow-xl">
                <code className="text-white font-mono text-lg">
                  {"<developer/>"}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
