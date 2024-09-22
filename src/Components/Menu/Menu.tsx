import React, { useEffect, useState } from 'react'
import './Menu.scss'
import MenuItem from '../../Components/Menu/MenuItem'
import { useLocation } from 'react-router-dom'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const location = useLocation()
    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const handleMenuItemClick = () => {
        setIsMenuOpen(false) // Закрываем меню при выборе пункта
    }
    useEffect(() => {
        // Закрываем меню при изменении маршрута
        setIsMenuOpen(false)
    }, [location])
    return (
        <div className="header-navbar">
            <div
                className={`header-navbar__btn ${isMenuOpen ? 'active' : ''}`}
                onClick={handleMenuToggle}
            >
                <span className="header-navbar__btn" />
                <span className="header-navbar__btn" />
                <span className="header-navbar__btn" />
            </div>

            <div
                className={`header-navbar__list ${isMenuOpen ? 'active' : ''}`}
            >
                <MenuItem
                    className="nav-link"
                    to="/"
                    onClick={handleMenuItemClick}
                >
                    Головна
                </MenuItem>
                <MenuItem
                    className="nav-link"
                    to="/Serve"
                    onClick={handleMenuItemClick}
                >
                    Послуги
                </MenuItem>
                <MenuItem
                    className="nav-link"
                    to="/Price"
                    onClick={handleMenuItemClick}
                >
                    Ціни
                </MenuItem>
                <MenuItem
                    className="nav-link"
                    to="/Contact"
                    onClick={handleMenuItemClick}
                >
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
