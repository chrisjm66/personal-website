import { Link } from "react-router-dom";
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>Hi, 
                    <br/> I'm Chris.
                    <br/> I am a computer science student.
                </h1>
                <h2>
                    Full-Stack Development, Java, and More
                </h2>

                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;