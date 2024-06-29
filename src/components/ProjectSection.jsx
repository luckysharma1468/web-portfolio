import ProjectCarousel from "./ProjectCarousel";
import "../css/ProjectSection.css";

export default function ProjectSection() {
  return (
    <div className="container d-flex align-items-center mt-5 pt-2 pt-md-0 flex-column mb-5">
        <h2 className="mb-5">My <span className="projects">Projects</span></h2>
        <div>
          <ProjectCarousel />
        </div>
    </div>
  )
}
