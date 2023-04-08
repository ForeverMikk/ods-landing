import React from 'react';


import './Navbar.css';
import logo  from '../../assets/logo-1.png';
import logoOds  from '../../assets/logo-1.png';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo Gobierno de Hidalgo" />
            <img src={logoOds} alt="Logo ODS" />
        </nav>
    )
};


export default Navbar;