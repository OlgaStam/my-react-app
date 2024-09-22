import React, { useState, useEffect } from 'react'
import './UpButton.scss'

const UpButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    // Показывать кнопку, если прокручено больше высоты экрана
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > window.innerHeight) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div
            className={`up-button__wrapper ${isVisible ? 'is_visible' : ''}`}
            onClick={scrollToTop}
        >
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
    )
}

export default UpButton
