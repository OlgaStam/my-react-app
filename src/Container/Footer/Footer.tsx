import './Footer.scss'
import logo from '../../Assets/logo.webp'
import React from 'react'
const Footer = () => {
    return (
        <footer className="footer lev-bg cw">
            <div className="container">
                <div className="footer-logo">
                    <a className="cw" href=" /">
                        <img src={logo} />
                        <span>Бухгалтерська агенція "ЛЕВ"</span>
                    </a>
                    <span>Наш супровід - Ваш спокій</span>
                </div>

                <div className="footer-contacts">
                    <h2 className="footer-title">Контакти</h2>
                    <a className="phone cw" href="tel:+380986073304">
                        <i className="fa-solid fa-phone-volume"></i>
                        +38 (098) 607-33-04
                    </a>
                    {/* <a className="phone cw" href="tel:+380986073304">
                        <FontAwesomeIcon
                            icon={faPhoneVolume}
                            className="fa-solid"
                        /> 
                        +38 (098) 607-33-04
                    </a> */}
                    <a
                        className="mail cw"
                        href="mailto:lev.buh.agency@gmail.com"
                    >
                        <i className="fa-solid fa-envelope"></i>
                        lev.buh.agency@gmail.com
                    </a>
                    <div className="social-icons-block">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://t.me/lev_buh"
                            className="social-icons-link"
                        >
                            <i className="fa-brands fa-telegram cw"></i>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="viber://chat?number=+380986073304"
                            className="social-icons-link"
                        >
                            <i className="fa-brands fa-viber cw"></i>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/lev_buh_agency"
                            className="social-icons-link"
                        >
                            <i className="fa-brands fa-instagram cw"></i>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=61555635522199"
                            className="social-icons-link"
                        >
                            <i className="fa-brands fa-facebook cw"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-address">
                    <h2 className="footer-title">Адреса офісу</h2>
                    <a href="/contact">
                        <i className="fa-solid fa-location-dot"></i>
                        Харківська обл., смт Пісочин (с.Надточії), вул.Дачна 39
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer
