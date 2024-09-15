import React from 'react'

const button = () => {
    return (
        <div className="up-button__wrapper">
            <a href="" className="up-button">
                <svg width="29" height="29" viewBox="0 0 50 29" fill="none">
                    <path
                        className="up-button__path"
                        d="M4.5 24.5L25 4L45.5 24.5"
                        stroke="#545683"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </a>
        </div>
    )
}
export default button
