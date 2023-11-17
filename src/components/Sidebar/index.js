import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome as HomeIcon,
    faUser as UserIcon,
    faEnvelope as EnvelopeIcon } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSub} alt='me' />
        </Link>
        <nav>
            <NavLink exact='true' activeClassName='active' className='home-link' to='/'>
                <FontAwesomeIcon icon = { HomeIcon } color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeClassName='active' className ='about-link' to='/'>
                <FontAwesomeIcon icon = { UserIcon } color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeClassName='active' className='contact-link' to='/'>
                <FontAwesomeIcon icon = { EnvelopeIcon } color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>    
)

export default Sidebar