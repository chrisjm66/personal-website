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
                    <AnimatedLetters letterClass={ letterClass } string={ "About Me" } index={ 15 }/>
                </h1>

                <h2>Programming</h2>
                <p>
                    I started programming when I was fourteen years old, creating games in ROBLOX that I would enjoy playing using a language called Lua which has similarities to python.
                    For a while, I did not continue learning about computer science until I took a high school programming class that used JavaScript, and I enjoyed it.
                    I spent a lot of time programming using JavaScript, which lead me into learning HTML, CSS, Java, Python, and many more languages.
                </p>
                <p>
                    Since then, I have been working on projects to better my understanding of programming and how it works, and am currently enrolled in college and am majoring in Computer Science. This website is my first college 'project,' and
                    I also am creating this website to learn React.js, the popular web development library for user interfaces.
                </p>

                <h2>Flying</h2>
                <p>
                    I hold a Student Pilot certifcate and have my checkride for my Private Pilot license scheduled this month (November, 2023). I have been interested in flying since I was nine years old after I saw a video of someone playing Microsoft Flight Simulator.
                    After watching that video, I installed a flight simulator on my dad's computer. On my sixteenth birthday, I was gifted two flight lessons and have been flying ever since!
                </p>
            </div>

                
        </div>
    )
}


export default About;