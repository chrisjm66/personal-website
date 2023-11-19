import { Link } from "react-router-dom";
import { useState } from "react";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
    const[ letterClass, setLetterClass ] = useState('text-animate');
    const nameArray = createCharArray( " Chris." )
    const subTextArray = createCharArray( "Full-Stack Development, Java, and More" );

    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>Hi, 
                    <br/> I'm
                    <AnimatedLetters letterClass={ letterClass } stringArray={ nameArray } index={ 15 }/>
                    <br/> I am a computer science student.
                </h1>
                <h2>
                    <AnimatedLetters letterClass={ letterClass } stringArray={ subTextArray } index={20} />
                </h2>

                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
}

function createCharArray( text ) {
    var array = [];

    for (let index = 0; index < text.length; index++) {
        const element = text.charAt( index );

        array[ index ] = element;
        
    }

    return array;
}
export default Home;