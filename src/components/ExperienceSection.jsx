import { useCallback, useEffect, useState } from 'react';
import ExperienceTab from './ExperienceTab';
import ExperienceSummary from './ExperienceSummary';
import '../css/ExperienceSection.css';

export default function ExperienceSection() {

    const [selected, setSelected] = useState(0);
    const [companyName, setCompanyName] = useState("");
    const [summary, setSummary] = useState([]);

    const workHistory = useCallback(() => [
        {
            id: 0,
            position: "Software Developer",
            company: "@ Amdocs",
            duration: "April 2022 - Present",
        },
        {
            id: 1,
            position: "Software Engineer",
            company: "@ Nagarro",
            duration: "Oct 2020 - April 2022"
        }
    ], [selected]);

    const experienceSummary = useCallback(() => [
        {
            id: 0,
            summary: [
                "Architected a react storybook from scratch and integrated in a legacy project, achieving a 40% reduction in development time by streamlining UI component design and tracking changes according to user stories.",
                "Revitalized the mobile application in the current project by introducing 5 new screens, resulting in optimized user experience and enhanced functionality.",
                "Executing comprehensive end-to-end testing for each task, guaranteeing the seamless delivery of code to production with 0 defects.",
                "Deployed defect resolution processes, reducing user-reported issues by 30%, elevating product quality.",
                "Redesigned customer dashboard by 100%, implementing new templates aligned with Figma designs, resulting in a 25% increase in user engagement.",
                "Added a new smartwatch journey by developing new widgets from the ground up within the micro-frontend architecture.",
                "Resolving application issues promptly to guarantee seamless functionality, ensuring uninterrupted user experience and overall system stability through effective support and troubleshooting",
                "Streamlining task delivery in agile environment and achieving timely completion within 2-week sprint cycles for enhanced productivity."
            ]
        },
        {
            id: 1,
            summary: [
                "Led a feature for real-time error filtering in user-provided Excel inputs, reduced human errors by 90%, and enhanced system accuracy for improved user experience.",
                "Addressed client needs by integrating 2 new user journeys, enhancing the monolithic single-page app functionality.",
                "Optimized Python-based Machine Learning algorithms, reducing processing time by 35% for enhanced efficiency.",
                "Solved codebase complexity by introducing Higher Order Components (HOCs), improving reusability, and simplifying debugging.",
                "Direct communication with client, gathering requirements, providing updates, and addressing their queries and concerns daily.",
                "Implemented AWS Lambda logging to distinguish user types, reducing backend algorithm debugging time by 50% for enhanced efficiency."
            ]
        }
    ], [selected]);

    useEffect(() => {
        const value = experienceSummary().filter((sum) => sum.id === selected)[0].summary;
        const cName = workHistory().filter((cn) => cn.id === selected)[0].company;
        setSummary(value);
        setCompanyName(cName);
    },[experienceSummary, workHistory, selected, setSummary, setCompanyName]);

    return (
        <div className="d-flex align-items-center mt-5 pt-2 pt-md-0 flex-column mb-5">
            <h2>Work <span className="history">History</span></h2>
            <div className="container mt-5 d-flex justify-content-evenly flex-column flex-md-row">
                {workHistory().map((work) => (
                    <ExperienceTab
                        id={work.id}
                        key={work.company}
                        work={work}
                        selected={work.id === selected}
                        setSelected={setSelected}
                    />
                ))}
            </div>
            <div className="container mt-5 pt-3 d-flex justify-content-center">
                <ExperienceSummary
                    companyName={companyName}
                    summary={summary}
                />
            </div>
        </div>
  )
}
