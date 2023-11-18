import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome as HomeIcon,
    faUser as UserIcon,
    faEnvelope as EnvelopeIcon } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const logoColor = "#4d4d4e"
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSub} alt='me' />
        </Link>
        <nav>
            <NavLink exact='true' activeClassName='active' className='home-link' to='/'>
                <FontAwesomeIcon icon = { HomeIcon } color={ logoColor } />
            </NavLink>
            <NavLink exact='true' activeClassName='active' className ='about-link' to='/about'>
                <FontAwesomeIcon icon = { UserIcon } color={ logoColor } />
            </NavLink>
            <NavLink exact='true' activeClassName='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon = { EnvelopeIcon } color={ logoColor } />
            </NavLink>
        </nav>

        <ul>
            
            <li>
                <a href="https://linkedin.com/manganchris" rel='noreferrer'>
                    <FontAwesomeIcon icon={ faLinkedin } color={ logoColor } />
                </a>
            </li>

            <li>
                <a href="https://github.com/chrisjm66" rel='noreferrer'>
                    <FontAwesomeIcon icon={ faGithub } color={ logoColor } />
                </a>
            </li>

        </ul>

    </div>    
)

export default Sidebar