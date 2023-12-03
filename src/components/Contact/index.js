import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters/index.js";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as EmailJs from "@emailjs/browser";
const Contact = () => {
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
                    <AnimatedLetters letterClass={ letterClass } string={ "Contact" } index={ 15 }/>
                </h1>
                <h2>
                    I am available for general inquires along with projects at this time.
                </h2>
                <br />
            
                <div className='contact-info'>
                    <div className="email">
                        <FontAwesomeIcon className='icon' icon={faEnvelope} alt='letter' />
                        chrisjm66@gmail.com
                    </div>
                    <div className="linkedin">
                        <FontAwesomeIcon className='icon' icon={faLinkedin} alt='linkedin' />
                        manganchris
                    </div>
                    <div className="github">
                        <FontAwesomeIcon className='icon' icon={faGithub} alt='github' />
                        chrisjm66
                    </div>
                </div>
            </div>

            
        </div>
    )
}

/*
const emailJSInit = () => {
return (
    <>
        <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
                </script>

                <script type="text/javascript">
                (function(){
                    EmailJs.init("VE9LS3nvlbmeFh5dn")
                })();
        </script>
    </>
    
)
}
*/
export default Contact;