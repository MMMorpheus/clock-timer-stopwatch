import { useState } from "react";
import { Clock, StopWatch, Timer } from "components";

import styles from "./Device.module.scss"

export const Device = () => {
  const [currentOption, setCurrentOption] = useState("stopwatch");

  return (
    <>
      <div className={styles.options}>
        <button
          onClick={() => {
            setCurrentOption("clock");
          }}
        >
          clock
        </button>
        <button
          onClick={() => {
            setCurrentOption("stopwatch");
          }}
        >
          stopwatch
        </button>
        <button
          onClick={() => {
            setCurrentOption("timer");
          }}
        >
          timer
        </button>
      </div>
      {currentOption === "clock" && <Clock />}
      {currentOption === "stopwatch" && <StopWatch />}
      {currentOption === "timer" && <Timer />}
    </>
  );
};
