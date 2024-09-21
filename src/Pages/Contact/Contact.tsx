import './Contact.scss'
import React from 'react'

const contact = () => {
    return (
        <>
            <h3 className="pageTitle">Контакти</h3>
            <div className="site-contact lev-font-color container">
                <div className="contact-row">
                    <a className="phone lev-color td" href="tel:+380986073304">
                        <i className="fa-solid fa-phone-volume"></i>
                        +38 (098) 607-33-04
                    </a>
                    <a
                        className="mail lev-color td"
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
                            <i className="fa-brands fa-telegram lev-color"></i>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="viber://chat?number=+380986073304"
                            className="social-icons-link"
                        >
                            <i className="fa-brands fa-viber lev-color"></i>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/lev.buh.agency"
                            className="social-icons-link"
                        >
                            <i className="fa-brands fa-instagram lev-color"></i>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=61557095614231"
                            className="social-icons-link"
                        >
                            <i className="fa-brands fa-facebook lev-color"></i>
                        </a>
                    </div>
                </div>

                <div className="contact-row">
                    <div className="contact-column">
                        <h3>Запис на консультацію:</h3>
                        <form
                            id="contact-form"
                            action="/main/home/create-consulting"
                            method="post"
                        >
                            <input
                                type="hidden"
                                name="_csrf-frontend"
                                value="xR0aPOZCkIOIY43nldmv0PVikNWusXKwH0GqHktKY0eIWGkLrhGmxcYixJ2gnv-bwxijluPAGeZAEPBPfC8iHg=="
                            />
                            <div className="form-group field-contactform-name required has-error">
                                <label
                                    className="control-label"
                                    htmlFor="contactform-name"
                                >
                                    Ім'я
                                </label>
                                <input
                                    type="text"
                                    id="contactform-name"
                                    className="form-control"
                                    name="ContactForm[name]"
                                    required
                                />
                                <p className="help-block help-block-error">
                                    Не може бути пустим
                                </p>
                            </div>
                            <div className="form-group field-contactform-email required">
                                <label
                                    className="control-label"
                                    htmlFor="contactform-email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="contactform-email"
                                    className="form-control"
                                    name="ContactForm[email]"
                                    required
                                />
                                <p className="help-block help-block-error"></p>
                            </div>
                            <div className="form-group field-contactform-phone required">
                                <label
                                    className="control-label"
                                    htmlFor="contactform-phone"
                                >
                                    Номер телефону
                                </label>
                                <input
                                    type="tel"
                                    id="contactform-phone"
                                    className="form-control"
                                    name="ContactForm[phone]"
                                    required
                                />
                                <p className="help-block help-block-error"></p>
                            </div>
                            <div className="form-group field-contactform-question required">
                                <label
                                    className="control-label"
                                    htmlFor="contactform-question"
                                >
                                    Коротке питання
                                </label>
                                <input
                                    type="text"
                                    id="contactform-question"
                                    className="form-control"
                                    name="ContactForm[question]"
                                    required
                                />
                                <p className="help-block help-block-error"></p>
                            </div>
                            <div className="form-group consulting-submit-button">
                                <button
                                    type="submit"
                                    className="btn btn-success lev-bg"
                                    name="contact-button"
                                >
                                    Надіслати
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-column">
                        <h3>Адреса:</h3>
                        <p>
                            Харківська обл., смт Пісочин (с.Надточії), вул.Дачна
                            39
                        </p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1283.0783815596037!2d36.07347663829013!3d49.97091863501656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41279fa6b9d47351%3A0x2fb47a934820d0d8!2z0JHRg9GF0LPQsNC70YLQtdGA0YHRjNC60LAg0LDQs9C10L3RhtGW0Y8gItCb0JXQkiI!5e0!3m2!1sru!2sua!4v1709484849995!5m2!1sru!2sua"
                            width="600"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="up-button__wrapper is_visible">
                <a href="#" className="up-button">
                    <svg width="29" height="29" viewBox="0 0 50 29" fill="none">
                        <path
                            className="up-button__path"
                            d="M4.5 24.5L25 4L45.5 24.5"
                            stroke="#545683"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </a>
            </div>
        </>
    )
}

export default contact
