/* eslint-disable react/prop-types */
import "../css/ExperienceSummary.css";

export default function ExperienceSummary({ companyName, summary }) {
  return (
    <div className="experience-summary container mx-4">
        <h5 className="heading mt-3 ps-3 py-2">My Responsibilities {companyName}</h5>
        <ul className="summary-pointers px-5">
            {
                summary.map((sum, index) => (
                    <li
                        key={index}
                        className={`${index === 0 ? '' : 'mt-2'}`}
                    >
                        {sum}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}