import React from 'react';
import PropTypes from 'prop-types'
import './TimePanel.scss'
import {format} from 'date-fns'

//This is a component, which renders formated data obj using date-fns lib., receives native date obj as prop;

const TimePanel = (props) => {
    
    return (
        <section className='timePanel'>
            <div className='timeValueContainer'>
                <div className='timeValue'>{format((props.time), 'HH')}</div>
                <div className='tittle'>Hours</div>
            </div>
            <div className='timeValueContainer'>
                <div className='timeValue'>{format((props.time), 'mm')}</div>
                <div className='tittle'>Minutes</div>
            </div>
            <div className='secondsContainer'>
                <div className='timeValue'>{format((props.time), 'ss')}</div>
                <div className='tittle'>Seconds</div>
                <div className='millisec'>{format((props.time), 'SS')}</div>
            </div>
           </section>
    );
}

TimePanel.propTypes = {
    time: PropTypes.object
}

export default TimePanel;
