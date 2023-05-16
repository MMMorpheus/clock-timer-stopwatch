import styles from "./Cell.module.scss";
import { format } from "date-fns";

export const Cell = ({ time, title }) => {
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
      <div className={styles.title}>{title}</div>
    </div>
  );
};
