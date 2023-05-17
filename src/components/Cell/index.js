import { format } from "date-fns";
import { MdChangeHistory } from "react-icons/md";
import classnames from "classnames";

import styles from "./Cell.module.scss";

export const Cell = ({ time, title, timer, plus, minus, isRunning }) => {
  return (
    <div className={styles.container}>
      {title.toLowerCase() === "hours" && (
        <div className={styles.time}>{format(time, "HH")}</div>
      )}

      {title.toLowerCase() === "minutes" && (
        <div className={styles.time}>{format(time, "mm")}</div>
      )}

      {title.toLowerCase() === "seconds" && (
        <>
          <div className={styles.time}>{format(time, "ss")}</div>
          <div className={styles.ms}>{format(time, "SS")}</div>
        </>
      )}

      {timer && (
        <>
          <button
            className={classnames(styles.plus, isRunning && styles["_running"])}
            onClick={plus}
            disabled={isRunning}
          >
            <MdChangeHistory />
          </button>
          <button
            className={classnames(
              styles.minus,
              isRunning && styles["_running"]
            )}
            onClick={minus}
            disabled={isRunning}
          >
            <MdChangeHistory className={styles.bot} />
          </button>
        </>
      )}

      <div className={styles.title}>{title}</div>
    </div>
  );
};
