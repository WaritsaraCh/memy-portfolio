import React from 'react'
import { HeartIcon, ArrowUpIcon } from 'lucide-react'
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
              <span className="text-blue-400">Dev</span>Portfolio
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
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
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
                {['github', 'linkedin', 'twitter', 'instagram'].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`}
                        alt={social}
                        className="w-5 h-5 filter invert"
                      />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center">
              <span>
                © {new Date().getFullYear()} John Doe. All rights reserved.
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
