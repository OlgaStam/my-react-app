import './Header.scss'
import logo from '../../assets/logo.webp'
import Menu from 'components/Menu/Menu'

type Props = {}
const Header = () => {
    return (
        <header className="header">
            <div className="header-menu lev-font-color">
                <div className="container">
                    <nav className="header-menu__container">
                        <div className="header-logo">
                            <a className="header-logo__link" href="/">
                                <img src={logo} />
                            </a>
                        </div>
                        <Menu />
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header
