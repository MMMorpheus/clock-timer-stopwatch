import { MdPlayArrow, MdReplay, MdPause, MdPlaylistAdd } from "react-icons/md";

import styles from "./ControlPanel.module.scss";

export const ControlPanel = ({ onGo, onReset, onLap, isRunning }) => {
  return (
    <div className={styles.panel}>
      <button onClick={onGo} className={styles.controlBtn}>
        {isRunning ? <MdPause /> : <MdPlayArrow />}
        {!isRunning ? "START" : "PAUSE"}
      </button>
      <button onClick={onReset} className={styles.controlBtn}>
        <MdReplay />
        RESET
      </button>
      <button onClick={onLap} className={styles.controlBtn}>
        <MdPlaylistAdd />
        LAP
      </button>
    </div>
  );
};
