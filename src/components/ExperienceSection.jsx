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
                "Developing and maintaining UI components for an e-commerce website to improve the overall user experience.",
                "Redesigned the entire customer dashboard by implementing new templates aligned with Figma designs and providing an improved and fresh experience for end users.",
                "Integrated React Storybook into the legacy codebase, helping product owners / scrum masters manage UI changes with respect to production using JIRA ticket naming conventions.",
                "Collaborating with the backend team to understand the logic behind API responses for resolving production defects and develop new UI functionalities according to business needs.",
                "Worked with the mobile application team to improve existing code and adding new screens for additional functionalities for end users.",
                "Implementing and managing states using redux toolkit for efficient data flow and easier future debugging.",
                "Improving and writing React JS components in a modular and reusable fashion to optimize the application and facilitate easier debugging."
            ]
        },
        {
            id: 1,
            summary: [
                "Led a feature for real-time error filtering in user-provided Excel inputs, reduced human errors by 90%, and enhanced system accuracy for improved user experience.",
                "Improving and adding new functionalities to both the UI and Backend as per business requirements.",
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
