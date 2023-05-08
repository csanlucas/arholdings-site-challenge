import './Common.css'
import logo from './ar-logo-white.png'

const Header = () => {
    return (
        <div className="Common-header">
            <img src={logo} alt="ar-logo" className="Common-logo"/>
        </div>
    )
}

export default Header
