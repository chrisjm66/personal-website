import { useEffect, useState } from "react";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters/index.js";

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
                <div className="project-wrapper" >
                    <div className="personal-website">
                        <h2>Personal Website</h2>
                        <h3><i>React.js, React Router, HTML/CSS, SASS</i></h3>
                        <p>This website is my first official personal project. I wanted to learn React.js so I used that, React Router, and wound up using SASS as well.</p>
                    </div>
                    
                    <div className="personal-website">
                        <h2>Personal Website</h2>
                        <h3><i>React.js, React Router, HTML/CSS, SASS</i></h3>
                        <p>This website is my first official personal project. I wanted to learn React.js so I used that, React Router, and wound up using SASS as well.</p>
                    </div>
                </div>

            </div>

                
        </div>
    )
}

export default About;