import React from 'react';

import './MenuItem.scss'
import {Link} from 'react-router-dom'

const MenuItem = (props) => {
    return (
        <li className='menuItem'>
            <Link to={props.link}>{props.innerText}</Link>
        </li>
    );
}

export default MenuItem;

