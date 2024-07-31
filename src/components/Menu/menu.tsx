import './Menu.scss'
import MenuItem from './MenuItem'
type Props = {}
const Menu = (props: Props) => {
    return (
        /* <div className="header-navbar">
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
                        </div> */
        <div className="header-navbar">
            <div className="header-navbar__btn">
                <span />
                <span />
                <span />
            </div>
            <div className="header-navbar__list">
                <MenuItem className="nav-link" to="/">
                    Головна
                </MenuItem>
                <MenuItem className="nav-link" to="/Serve">
                    Послуги
                </MenuItem>
                <MenuItem className="nav-link" to="/Price">
                    Ціни
                </MenuItem>
                <MenuItem className="nav-link" to="/Contact">
                    Контакти
                </MenuItem>
            </div>
            <a className="header-navbar__contacts" href="tel:+380986073304">
                <span>Ми на зв'язку</span>
                <span>+38 (098) 607-33-04</span>
                <small>Пн.-Пт. з 09:00 до 18:00</small>
            </a>
        </div>
    )
}
export default Menu
