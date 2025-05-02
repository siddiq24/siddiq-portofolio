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
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <ThreeBackground />
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <SkillSection />
      <EducationAndExperience />
      <ProjectSection />
      <ContactUs />
    </div>
  )
}

export default App
