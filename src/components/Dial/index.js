import { Cell } from "components";

import styles from "./Dial.module.scss";

export const Dial = ({ time, timer, timerSetup, isRunning }) => {
  return (
    <div className={styles.container}>
      <Cell
        time={time}
        title="Hours"
        timer={timer}
        plus={timerSetup?.addHour}
        minus={timerSetup?.subHour}
        isRunning={isRunning}
      />
      <Cell
        time={time}
        title="Minutes"
        timer={timer}
        plus={timerSetup?.addMinute}
        minus={timerSetup?.subMinute}
        isRunning={isRunning}
      />
      <Cell
        time={time}
        title="Seconds"
        timer={timer}
        plus={timerSetup?.addSecond}
        minus={timerSetup?.subSecond}
        isRunning={isRunning}
      />
    </div>
  );
};
