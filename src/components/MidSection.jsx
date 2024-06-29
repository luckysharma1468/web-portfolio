import AboutSection from "./AboutSection";
import SkillSection from "./SkillSection";

export default function MidSection() {
  return (
    <div className="d-flex justify-content-evenly mt-5 flex-column flex-md-row">
        <AboutSection />
        <SkillSection />
    </div>
  )
}
