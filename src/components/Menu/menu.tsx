import { NavLink } from 'react-router-dom'

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
            <NavLink to="/" className="nav-item nav-link">
                Головна
            </NavLink>
            <NavLink to="/Serve" className="nav-item nav-link">
                Послуги
            </NavLink>
            <NavLink to="/Price" className="nav-item nav-link">
                Ціни
            </NavLink>
            <NavLink to="/Contact" className="nav-item nav-link">
                Контакти
            </NavLink>
            <div className="header-navbar">
                <div className="header-navbar__btn">
                    <span className="header-navbar__btn-row" />
                    <span className="header-navbar__btn-row" />
                    <span className="header-navbar__btn-row" />
                </div>
                <a className="header-navbar__contacts" href="tel:+380986073304">
                    <span>Ми на зв'язку</span>
                    <span>+38 (098) 607-33-04</span>
                    <small>Пн.-Пт. з 09:00 до 18:00</small>
                </a>
            </div>
        </div>
    )
}
export default Menu
