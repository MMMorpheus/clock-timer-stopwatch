import React from 'react';
import './ControlPanel.scss'

const ControlPanel = (props) => {
    const {onGo, onReset, onLap, isRunning} = props;
    // console.log(onReset)

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

export default ControlPanel;
