import { useState, useEffect } from "react";

const ClockStep = 100; //ms

export const useClock = () => {
  const [time, setTime] = useState(new Date());
  const update = () => {
    setTime(new Date())
  }

  useEffect(() => {
    let id;
    id = setInterval(update, ClockStep)

    return () => {
        clearInterval(id)
    }
  }, []);

  return time
};
