import React from 'react';

const Header = props => {
    return (
        <header className="Header">
            <div className="container">
                <div className="row">
                    <div className="Header__left col-md-4">
                        <div className="Header__logo">
                            <a href="/" className="Header__logo-link">
                                <img src={props.logo} alt="Logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="Header__right col-md-8">
                        <div className="Header__nav">
                            <ul className="Header__nav-list">
                                <li className="Header__nav-item">
                                    <a href="#" className="Header__nav-link">Home</a>
                                </li>
                                <li className="Header__nav-item">
                                    <a href="#" className="Header__nav-link">Program</a>
                                </li>
                                <li className="Header__nav-item">
                                    <a href="#" className="Header__nav-link">Apply Here</a>
                                </li>
                                <li className="Header__item">
                                    <a href="#" className="Header__nav-link Header__nav-link--last">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Header__nav-toggle">
                        <span className="Header__nav-toggle-stripe Header__nav-toggle-stripe--1"></span>
                        <span className="Header__nav-toggle-stripe Header__nav-toggle-stripe--2"></span>
                        <span className="Header__nav-toggle-stripe Header__nav-toggle-stripe--3"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header