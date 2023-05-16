import { useState, useEffect, useCallback } from "react";
import { addMilliseconds } from "date-fns";

const StopwatchStep = 10;

export const useStopwatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);

  const toggle = useCallback(() => {
    setIsRunning(!isRunning);
  }, [isRunning]);

  const tick = () => {
    setTime(addMilliseconds(time, 10));
  };

  const reset = useCallback(() => {
    if (isRunning) {
      toggle();
    }
    setTime(new Date(0, 0, 0, 0));
  }, [isRunning]);

  const addLap = () => {
    setResults([...results, time]);
  };

  useEffect(() => {
    let stopWatchId;
    if (isRunning) {
      stopWatchId = setTimeout(tick, StopwatchStep);
    }
    return () => {
      clearTimeout(stopWatchId);
    };
  }, [isRunning, time]);

  const controls = { toggle, reset, addLap };

  return [time, results, isRunning, controls];
};
