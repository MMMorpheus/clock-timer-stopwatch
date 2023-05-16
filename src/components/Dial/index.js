import { Cell } from "../";

import styles from "./Dial.module.scss"

export const Dial = ({time}) => {

    return (
        <div className={styles.container}>
            <Cell time={time} title="Hours"/>
            <Cell time={time} title="Minutes"/>
            <Cell time={time} title="Seconds"/>
        </div>
    )
}