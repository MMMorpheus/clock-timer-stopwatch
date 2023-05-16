import React, {useState} from 'react';
import {Timer, StopWatch} from "../"

import './Organizer.scss'

const Organizer = () => {

    const [currentOption, setCurrentOption] = useState(false);
    const toggle = () => {
        setCurrentOption(!currentOption)
    }

    const stopWatchOption = () => {
        if(currentOption){
            toggle()
        }
    }

    const timerOption = () => {
        if(!currentOption){
            toggle()
        }
    }

    return (
        <article className='organizer'>
            <div className='changeOptionPanel'>
                <div onClick ={stopWatchOption} className='btn'>Stopwatch</div>
                <div onClick ={timerOption} className='btn'>Timer</div>
            </div>
            {!currentOption ? <StopWatch /> : <Timer />}
            
        </article>
    );
}

export default Organizer;
