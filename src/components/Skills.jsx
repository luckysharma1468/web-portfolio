/* eslint-disable react/prop-types */
import '../css/Skills.css';

export default function Skills({ skillName, percentage, width }) {

  return (
    <div
        key={skillName}
        className={`${skillName === 'React JS' ? '' : 'mt-4'}`}
    >
        <div className="d-flex justify-content-between">
            <h6 className="fw-bolder">{skillName}</h6>
            <h6 className="percentage me-3">{percentage}</h6>
        </div>
        <div className="progress my-progress-bar">
            <div
                className="progress-bar"
                role="progressbar"
                style={{"width": width}}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
            />
        </div>
    </div>
  )
}
