import { useEffect, useState } from "react";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters/index.js";
import { NavLink } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
                        <AnimatedLetters letterClass={ letterClass } string={ "Portfolio" } index={ 15 }/>
                    </h1>

                <h2>My Projects</h2>
            </div>

            <div className="project-wrapper" >
                <div className="individual-wrapper">
                    <div className="text-area personal-website">
                        <h2>Personal Website</h2>
                        <h3><i>React.js, React Router, HTML/CSS, SASS</i></h3>
                        <p>This website is my first official personal project. I wanted to learn React.js so I used that, React Router, and wound up using SASS as well.</p>

                        <nav className="navlink">
                            <NavLink to="https://chrismangan.net"><img src={faLink} alt="link logo" /></NavLink>
                            <NavLink to="https://github.com/chrisjm66/personal-website"> <img src={faGithub} alt="github logo"/> </NavLink>
                        </nav>
                    </div>
                </div>
                
            </div>
                
        </div>
    )
}

export default About;