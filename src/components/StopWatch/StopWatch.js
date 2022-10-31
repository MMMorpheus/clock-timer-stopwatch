import React, {useState, useEffect} from 'react';
import './StopWatch.scss'
import { format, addMilliseconds} from 'date-fns'

const StopWatch = () => {

    const [time, setTime] = useState(new Date(0, 0, 0, 0));
    const [isRunning, setIsRunning] = useState(false);

    const toggle = () => {
        setIsRunning(!isRunning)
    }
     
    const tick = () => {
        setTime(addMilliseconds (time, 10));
    }

    const reset = () => {
        setTime(new Date(0, 0, 0, 0))
    }

    let id = null;

    useEffect(() => {
        if(isRunning){
            id = setTimeout(tick, 10);
        };
        return () => {
            clearTimeout(id)
        }
    }, [isRunning, time])

    return (
        <article className='stopWatch'>
           <section className='timePanel'>
            <div className='timeValueContainer'>
                <div className='timeValue'>{format(time, 'HH')}</div>
                <div className='tittle'>Hours</div>
            </div>
            <div className='timeValueContainer'>
                <div className='timeValue'>{format(time, 'mm')}</div>
                <div className='tittle'>Minutes</div>
            </div>
            <div className='secondsContainer'>
                <div className='timeValue'>{format(time, 'ss')}</div>
                <div className='tittle'>Seconds</div>
                <div className='millisec'>{format(time, 'SS')}</div>
            </div>
           </section>

           <section className='controlPanel'>
            <button onClick={toggle} className='controlBtn'>
                <span className='material-symbols-outlined'>{!isRunning ? 'play_arrow' : 'pause'}</span>
                {!isRunning ? 'START' : 'PAUSE'}
            </button>
            <button onClick={reset} className='controlBtn'>
            <span class="material-symbols-outlined">replay</span>
                RESET</button>
            <button className='controlBtn'>
            <span class="material-symbols-outlined">playlist_add</span>
                LAP</button>
           </section>
        </article>
    );
}

export default StopWatch;