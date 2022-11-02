import React from 'react';
import PropTypes from 'prop-types'
import './ControlPanel.scss'


//This is a component, that contains panel with three control buttons (start/stop - reset - lap) for the Timer and the Stopwatch components;
//Receives three callback-func-s for buttons as props and a flag isRuning (bool), which signalizes if the count have been started;

const ControlPanel = (props) => {
    const {onGo, onReset, onLap, isRunning} = props;
    
    return (
        <section className='controlPanel'>

            <button onClick={onGo} className='controlBtn'>
                <span className='material-symbols-outlined'>{!isRunning ? 'play_arrow' : 'pause'}</span>
                {!isRunning ? 'START' : 'PAUSE'}
            </button>

            <button onClick={onReset} className='controlBtn'>
            <span className="material-symbols-outlined">replay</span>
                RESET</button>
            <button onClick={onLap} className='controlBtn'>

            <span className="material-symbols-outlined">playlist_add</span>
                LAP</button>
        </section>

        
    );
}

ControlPanel.propTypes = {
    onGo: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onLap: PropTypes.func,
    isRunning: PropTypes.bool.isRequired
}

export default ControlPanel;