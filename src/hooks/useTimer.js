import { useState, useEffect, useCallback } from "react";
import {
  add,
  subHours,
  subMinutes,
  subSeconds,
  subMilliseconds,
} from "date-fns";

const TimerStep = 10;

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(new Date(0, 0, 0, 0));

  const toggle = useCallback(() => {
    setIsRunning(!isRunning);
  }, [isRunning]);

  const tick = () => {
    setTime(subMilliseconds(time, 10));
  };

  const reset = useCallback(() => {
    if (isRunning) {
      toggle();
    }
    setTime(new Date(0, 0, 0, 0));
  }, [isRunning]);

  useEffect(() => {
    let id;
    if (isRunning) {
      id = setTimeout(tick, TimerStep);
    }
    return () => {
      clearTimeout(id);
    };
  }, [isRunning, time]);

  const addHour = () => {
    if (!isRunning) {
      setTime(add(time, { hours: 1 }));
    }
  };
  const subHour = () => {
    if (!isRunning) {
      setTime(subHours(time, 1));
    }
  };
  const addMinute = () => {
    if (!isRunning) {
      setTime(add(time, { minutes: 1 }));
    }
  };
  const subMinute = () => {
    if (!isRunning) {
      setTime(subMinutes(time, 1));
    }
  };
  const addSecond = () => {
    if (!isRunning) {
      setTime(add(time, { seconds: 1 }));
    }
  };
  const subSecond = () => {
    if (!isRunning) {
      setTime(subSeconds(time, 1));
    }
  };

  const controls = { toggle, reset };
  const timerSetup = {
    addHour,
    addMinute,
    addSecond,
    subHour,
    subMinute,
    subSecond,
  };

  return [time, isRunning, controls, timerSetup];
};
