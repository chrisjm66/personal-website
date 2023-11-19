import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters/index.js";
import Logo from './Logo/index.js'

const Home = () => {
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
            <Logo />
            <div className='text-zone'>
                <h1>Hi, 
                    <br/>
                    <AnimatedLetters letterClass={ letterClass } string={ "I'm Chris" } index={ 15 }/>
                    <br/> I am a computer science student.
                </h1>
                <h2>
                    Full-Stack, Java, & More
                </h2>

                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
            
        </div>
    )
}

export default Home;