import React from 'react';
import cx from 'classnames'

import './SetUp.scss'

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

export default SetUp;
