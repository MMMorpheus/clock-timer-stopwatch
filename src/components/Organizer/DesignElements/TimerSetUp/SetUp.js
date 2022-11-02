import React from 'react';
import PropTypes from 'prop-types';

import './SetUp.scss'

//This component is responsible for adding or subtracting time units to date obj, receives six functions for every button;

const SetUp = (props) => {

    const {addHour, subHour, addMinute, subMinute, addSecond, subSecond} = props
    return (
        <section className='setUp'>
                <button onClick={addHour} className='addHour'><span className="material-symbols-outlined">change_history</span></button>
                <button onClick={subHour} className='subHour'><span className="material-symbols-outlined">change_history</span></button>
                <button onClick={addMinute} className='addMinute'><span className="material-symbols-outlined">change_history</span></button>
                <button onClick={subMinute} className='subMinute'><span className="material-symbols-outlined">change_history</span></button>
                <button onClick={addSecond} className='addSecond'><span className="material-symbols-outlined">change_history</span></button>
                <button onClick={subSecond} className='subSecond'><span className="material-symbols-outlined">change_history</span></button>
        </section>
    );
}

SetUp.propTypes = {
    addHour: PropTypes.func.isRequired,
    subHour: PropTypes.func.isRequired,
    addMinute: PropTypes.func.isRequired,
    subMinute: PropTypes.func.isRequired,
    addSecond: PropTypes.func.isRequired,
    subSecond: PropTypes.func.isRequired,
}

export default SetUp;
