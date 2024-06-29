import '../css/AboutSection.css';

export default function AboutSection() {
  return (
    <div className='container d-flex flex-column align-items-center mb-4 mb-md-5'>
        <h2><span className="about">About</span> Me</h2>
        <p className='intro-text mt-2 mt-md-4 px-3'>
            Dynamic and detail-oriented Frontend Developer with proficiency in HTML, CSS,
            JavaScript, and React JS. Passionate about designing highly responsive websites
            with stunning, user-friendly designs. Committed to staying up-to-date with the
            latest web technologies and best practices.
        </p>
        <a
            className="btn resume-button mt-2 px-4"
            role='button'
            href="https://drive.google.com/file/d/16J_zc5vqQq2MaYYsVrLXpYwxAZPw5y3a/view?usp=drive_link"
            target="_blank"
            download="Prashant Sharma Resume"
        >
            Download Resume
        </a>
    </div>
  )
}
