import './Header.scss'
import logo from '../../Assets/logo.webp'
import Menu from 'Components/Menu/Menu'
import { Link } from 'react-router-dom'

// type Props = {}
const Header = () => {
    return (
        <header className="header">
            <div className="header-menu lev-font-color">
                <div className="container">
                    <nav className="header-menu__container">
                        <div className="header-logo">
                            <Link className="header-logo__link" to="/">
                                <img src={logo} />
                            </Link>
                        </div>
                        <Menu />
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header
