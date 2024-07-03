import logo from '../../images/icon-round.webp'
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
                        <div className="header-navbar">
                            <div className="header-navbar__btn">
                                <span className="header-navbar__btn-row"></span>
                                <span className="header-navbar__btn-row"></span>
                                <span className="header-navbar__btn-row"></span>
                            </div>
                            <ul className="header-navbar__list">
                                <li className="nav-item">
                                    <a href="" className="nav-link main">
                                        Головна
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link serve">
                                        Послуги
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link price">
                                        Ціни
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link contact">
                                        Контакти
                                    </a>
                                </li>
                            </ul>
                            <a
                                className="header-navbar__contacts"
                                href="tel:+380986073304"
                            >
                                <span>Ми на зв'язку</span>
                                <span>+38 (098) 607-33-04</span>
                                <small>Пн.-Пт. з 09:00 до 18:00</small>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header
