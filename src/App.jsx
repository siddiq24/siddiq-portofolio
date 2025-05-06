import ThreeBackground from './components/threeBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import SkillSection from './components/SkillSection';
import EducationAndExperience from './components/EducationAndExperience';
import ProjectSection from './components/ProjectSection';
import ContactUs from './components/ContactUs';

import './App.css'

function App() {
  return (
    <div className="overflow-y-scroll border-r snap-y snap-mandatory h-[93vh] md:h-screen">
      <ThreeBackground />
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <SkillSection />
      <EducationAndExperience />
      <ProjectSection />
      <ContactUs />
      <footer className="text-center text-white/70 text-sm py-4 snap-end">
        &copy; {new Date().getFullYear()} Sidik Wisnu Sasmito. All rights reserved.
      </footer>
    </div>
  )
}

export default App
