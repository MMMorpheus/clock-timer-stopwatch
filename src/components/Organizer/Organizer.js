import React, {useState} from 'react';
import StopWatch from './StopWatch/StopWatch';
import Timer from './Timer/Timer';

import './Organizer.scss'

const Organizer = () => {

    const [currentOption, setCurrentOption] = useState(false);
    const toggle = () => {
        setCurrentOption(!currentOption)
    }

    return (
        <article className='organizer'>
            <div className='changeOptionPanel'>
                <div onClick ={toggle} className='btn'>Stopwatch</div>
                <div onClick ={toggle} className='btn'>Timer</div>
            </div>
            {!currentOption ? <StopWatch /> : <Timer />}
            
        </article>
    );
}

export default Organizer;
