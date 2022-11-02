import React from 'react';
import NavBar from '../NavigationBar/NavBar';
import logo from './logo.png'

import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <NavBar />
        </header>
    );
}

export default Header;
