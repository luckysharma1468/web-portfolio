import ProjectTemplate from "./ProjectTemplate";
import encryptoDecrypto from '../assets/encryptoDecrypto.png';
import EmployeeWebApp from '../assets/EmployeeWebApp.png';
import todo from '../assets/todo.png';
import "../css/ProjectCarousel.css";

export default function ProjectCarousel() {

const projects = [
    {
        id: 0,
        name: "Encrypto & Decrypto",
        language: "React JS | Redux | Tailwind CSS",
        image: encryptoDecrypto,
        summary: `A website that can be used to encrypt and decrypt text using 15
                different algorithms, helping you maintain your privacy.
                This application is made using React JS, Redux,
                and Tailwind CSS.`
    },
    {
        id: 1,
        name: "Employee Web App",
        language: "React JS | Redux | Flask",
        image: EmployeeWebApp,
        summary: `An employee management web application that can be used
                to manage employee data, such as personal information,
                career skills, work manager details, etc.`
    },
    {
        id: 2,
        name: "Todo App",
        language: "React JS | Bootstrap - 5",
        image: todo,
        summary: `A to-do application that helps you manage your daily tasks and
                reminds you via email if you forget. You can create multiple lists
                to manage different groups of tasks.`
    }
    ]


  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators myIndicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div>
                {projects.map((project, index) => (
                    <div key="" data-bs-interval="3000" className={`carousel-item  ${index === 0 ? 'active' : ''}`}>
                        <ProjectTemplate key={project.id} project={project} />
                    </div>
                ))}
            </div>
        </div>
        <button className="carousel-control-prev my-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next my-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}
