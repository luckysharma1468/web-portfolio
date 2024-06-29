import Title from './Title';
import '../css/Intro.css';

export default function Intro() {

    const introductionArray = [
        "Frontend Developer !",
        "React JS Developer"
    ];

  return (
    <div className='main mt-5'>
        <div className='d-flex flex-column align-items-center pt-5 pt-md-3'>
            <h3 className='hey'>Hey I, am</h3>
            <h1 className='name'>Prashant Sharma</h1>
            <Title introductionArray={introductionArray} />
        </div>
    </div>
  )
}
