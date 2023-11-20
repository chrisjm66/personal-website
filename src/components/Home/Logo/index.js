import './index.scss'
import MainLogo from '../../../assets/images/logo-main-t.png'
import SubLogo from '../../../assets/images/logo-sub.png'
const Logo = () => {
 return (
    <div className='logo-container'>
        <img src={MainLogo} alt='logo' className='main-logo'/>
    </div>
 )
}

export default Logo