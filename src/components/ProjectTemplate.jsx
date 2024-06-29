/* eslint-disable react/prop-types */
import "../css/ProjectTemplate.css";

export default function ProjectTemplate({ project }) {
  console.log(project)
  const {name, language, image, summary} = project;
  return (
    <div className="d-flex flex-column flex-md-row project-template">
        <div className="image-section d-flex justify-content-center">
            <img
              className="project-image m-4"
              src={image}
              alt="Employee Management system image"
            />
        </div>
        <div className="project-description d-flex flex-column align-items-center pt-4">
            <h3 className="project-heading">{name}</h3>
            <h6 className='language'>{language}</h6>
            <p className="px-5 pt-3">
                {summary}
            </p>
        </div>
    </div>
  )
}
