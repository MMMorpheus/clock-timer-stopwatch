import React from 'react';
import MenuItem from './Items/MenuItem';

import './NavBar.scss'


const NavBar = () => {
    return (
        <nav className='navigation'>
            <ul>
                <MenuItem link={'/'} innerText={'Home'}/>
                <MenuItem link={'organizer'} innerText={'Organizer'}/>
            </ul>
        </nav>
    );
}

export default NavBar;
