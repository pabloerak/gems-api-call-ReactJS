import './Header.css';
import logo from './images/astech_logo_white.gif';
import logo2 from './images/client_logo.png';

import React from 'react';

function Header() {
    return (
        <div className="header">
            <img className="astech__logo" src={logo} alt=""/>
            <h1 className="gems__logo">GEMS Basic</h1>
            <img className="client__logo" src={logo2} alt=""/>
        </div>
    );
}

export default Header;
