import ThreeBackground from './components/threeBackground' ;
import Navbar from './components/Navbar' ;
import HeroSection from './components/HeroSection';
import NumberSection from './components/NumberSection';
import ServiceSection from './components/ServiceSection';
import SkillSection from './components/SkillSection';
import EducationAndExperience from './components/EducationAndExperience';
import ProjectSection from './components/ProjectSection';

import './App.css'

function App() {
  return (
    <>
      <ThreeBackground />
      <Navbar/>
      <HeroSection/>
      <NumberSection/>
      <ServiceSection/>
      <SkillSection/>
      <EducationAndExperience/>
      <ProjectSection/>
    </>
  )
}

export default App
