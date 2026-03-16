import React from 'react'
import { HeartIcon, ArrowUpIcon, GithubIcon, LinkedinIcon, FacebookIcon, MailIcon } from 'lucide-react'
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              <span className="text-blue-400">Me</span>my
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Building exceptional digital experiences with clean, efficient,
              and maintainable code.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <a
                  href="#home"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/WaritsaraCh" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 hover:text-blue-400 transition-colors">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/waritsara-chaiyamong-277101373/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 hover:text-blue-400 transition-colors">
                  <LinkedinIcon size={20} />
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 hover:text-blue-400 transition-colors">
                  <FacebookIcon size={20} />
                </a>
                <a href="mailto:waritsara.ch@example.com" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 hover:text-blue-400 transition-colors">
                  <MailIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center">
              <span>
                © {new Date().getFullYear()} Waritsara Chaiyamong. All rights reserved.
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-400 mr-4 flex items-center">
              <span>Made with</span>
              <HeartIcon size={16} className="text-red-500 mx-1" />
              <span>using React & Tailwind CSS</span>
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
