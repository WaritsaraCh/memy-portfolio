import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectsSection from './sections/projects';
import SkillsSection from './sections/skills';
import ExperienceSection from './sections/experience';
export function App() {
  return <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        {/* <AboutSection /> */}
        <SkillsSection />
        <ProjectsSection /> 
        <ExperienceSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>;
}