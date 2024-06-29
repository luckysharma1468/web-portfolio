import Skills from "./Skills";
import "../css/SkillSection.css";

export default function SkillSection() {

  const skills = [
    {
        skillName: 'React JS',
        percentage: '80%',
        width: 200
    },
    {
        skillName: 'Redux',
        percentage: '75%',
        width: 180
    },
    {
        skillName: 'Javascript',
        percentage: '85%',
        width: 220
    },
    {
        skillName: 'BootStrap 5',
        percentage: '80%',
        width: 200
    },
    {
        skillName: 'Tailwind CSS',
        percentage: '85%',
        width: 220
    },
    {
        skillName: 'CSS 3',
        percentage: '90%',
        width: 280
    },
    {
        skillName: 'HTML 5',
        percentage: '80%',
        width: 200
    },
    {
        skillName: 'GitHub',
        percentage: '85%',
        width: 220
    },
    {
        skillName: 'Perforce',
        percentage: '85%',
        width: 220
    }
  ]

  return (
    <div className="container d-flex flex-column align-items-center mt-3 mt-md-0">
        <h2><span className="skill">Skill</span> Set</h2>
        <div className="mt-3 pt-1 skill-section">
            {skills.map(({skillName, percentage, width}) => (
                <Skills
                    key={skillName}
                    skillName={skillName}
                    percentage={percentage}
                    width={width}
                />
            ))}
        </div>
    </div>
  )
}
