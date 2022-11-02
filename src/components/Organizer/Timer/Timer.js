import React, {useState, useEffect} from 'react';
import TimePanel from '../DesignElements/TimePanel/TimePanel';
import ControlPanel from '../DesignElements/ControlPanel/ControlPanel';
import SetUp from '../DesignElements/TimerSetUp/SetUp';


import './Timer.scss'
import {add, subHours, subMinutes, subSeconds, subMilliseconds} from 'date-fns'

const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(new Date(0, 0, 0, 0));

    const toggle = () => {
        setIsRunning(!isRunning)
    }

    const setBack = () => {
        setTime(subMilliseconds(time, 10))
    }

    const reset = () => {
        if(isRunning) {
            toggle()
        }
        setTime(new Date(0, 0, 0, 0))
    }

    let id = null;
    useEffect(() => {
        if(isRunning){
            id = setTimeout(setBack, 10);
        };
        return () => {
            clearTimeout(id)
        }
    }, [isRunning, time])

    const addHour = () => {
        if(!isRunning) {
        setTime(add(time, {hours: 1}))
        }
    }
    const subHour = () => {
        if(!isRunning) {
        setTime(subHours(time, 1))
        }
    }
    const addMinute = () => {
        if(!isRunning) {
        setTime(add(time, {minutes: 1}))
        }
    }
    const subMinute = () => {
        if(!isRunning) {
        setTime(subMinutes(time, 1))
        }
    }
    const addSecond = () => {
        if(!isRunning) {
        setTime(add(time, {seconds: 1}))
        }
    }
    const subSecond = () => {
        if(!isRunning) {
        setTime(subSeconds(time, 1))
        }
    }
    
    return (
        <>
            <article className='timer'>
                <TimePanel time={time}/>
                <ControlPanel onGo={toggle} isRunning={isRunning} onReset={reset}/>
                <SetUp addHour={addHour} subHour={subHour} addMinute={addMinute} subMinute={subMinute} addSecond={addSecond} subSecond={subSecond}/>
            </article>
        </>
    )
}

export default Timer;
