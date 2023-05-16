// import TimePanel from "../Organizer/DesignElements/TimePanel/TimePanel";
import ControlPanel from "../Organizer/DesignElements/ControlPanel/ControlPanel";
import SetUp from "../Organizer/DesignElements/TimerSetUp/SetUp";

import { Dial } from "../";

import "./Timer.scss";
import {useTimer} from "../../hooks"

export const Timer = () => {
  const [time, isRunning, controls, timerSetup] = useTimer();
  const { toggle, reset } = controls;
  const { addHour, addMinute, addSecond, subHour, subMinute, subSecond } =
    timerSetup;

  return (
    <>
      <article className="timer">
        <Dial time={time} />
        <ControlPanel onGo={toggle} isRunning={isRunning} onReset={reset} />
        <SetUp
          addHour={addHour}
          subHour={subHour}
          addMinute={addMinute}
          subMinute={subMinute}
          addSecond={addSecond}
          subSecond={subSecond}
        />
      </article>
    </>
  );
};
