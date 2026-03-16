import React from 'react';
import { MailIcon, MapPinIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 text-blue-600 rounded-full mb-6">
            <MailIcon size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Let's work together</h3>
          <p className="text-gray-600 mb-8">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <a
            href="mailto:waritsara.ch@example.com"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 transition-colors"
          >
            Say Hello
          </a>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="https://github.com/WaritsaraCh" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <GithubIcon size={20} className="mr-2" /> github.com/WaritsaraCh
            </a>
            <a href="https://www.linkedin.com/in/waritsara-chaiyamong-277101373/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <LinkedinIcon size={20} className="mr-2" /> LinkedIn Profile
            </a>
            <div className="flex items-center text-gray-600">
              <MapPinIcon size={20} className="mr-2" /> Mahasarakham, Thailand
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
