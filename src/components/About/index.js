import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters/index.js";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const About = () => {
    const[ letterClass, setLetterClass ] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      
        return () => {
          clearTimeout( timeoutId )
        }
      }, []);

    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={ letterClass } string={ "About" } index={ 15 }/>
                </h1>
                <h2>
                    I am available for general inquires along with projects at this time.
                </h2>
                <div className='contact-info'>
                    <div className="email">
                        <img src={ faEnvelope } alt='envelope' />
                        chrisjm66@gmail.com
                    </div>
                    <div className="linkedin">
                        <img src={ faLinkedin } alt='linkedin' />
                        manganchris
                    </div>
                    <div className="github">
                        <img src={ faGithub } alt='github' />
                        chrisjm66
                    </div>
                </div>
            </div>

            
        </div>
    )
}


export default About;