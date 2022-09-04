import React from 'react';
import './Header.css'

const Header = ({scrollTo , hideElement}) => {
    return (
        <div id={hideElement === false ? "navbar" : "navbarGray"} >
            <div className="navbar__logo"><i className="fas fa-cat"></i>
                <a href="#">jun</a>
            </div>
            <ul className="navbar__menu" >
                <li className="navbar__menu__item active"onClick={scrollTo}>Home</li>
                <li className="navbar__menu__item" onClick={scrollTo}>About</li>
                <li className="navbar__menu__item" onClick={scrollTo}>Skills</li>
                <li className="navbar__menu__item" onClick={scrollTo}>MyWork</li>
                <li className="navbar__menu__item" onClick={scrollTo}>Contact</li>
            </ul>
            <button className="navbar__toggle-btn">
                <i className="fas fa-bars"></i>
            </button>
        </div>
    );
};

export default Header;