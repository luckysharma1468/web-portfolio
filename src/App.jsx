import Intro from "./components/Intro";
import MidSection from "./components/MidSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="d-flex flex-column">
      <Intro />
      <MidSection />
      <ExperienceSection />
      <ProjectSection />
      <Footer />
    </div>
  )
}

export default App
