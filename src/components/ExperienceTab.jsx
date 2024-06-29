/* eslint-disable react/prop-types */
import '../css/ExperienceTab.css';

export default function ExperienceTab({ work, selected, setSelected }) {
  const {id, position, company, duration} = work;
  return (
    <div
        className={`
            experience-tab d-inline-flex flex-column pe-5 ps-4 pt-3
            ${id === 1 ? 'mt-5 mt-md-0': ''}
            mx-4 mx-md-0
            ${selected ? 'experience-tab-selected' : ''}
            `
        }
        onClick={() => setSelected(id)}
    >
        <h3 className="job-tile">{position}</h3>
        <div
            className={`horizontal-line mb-3 ${selected ? 'horizontal-line-selected' : ''}`}
        />
        <h5 className="company-name">{company}</h5>
        <p className="duration">{duration}</p>
    </div>
  )
}
