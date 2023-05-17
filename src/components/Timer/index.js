import { Dial, ControlPanel } from "components";
import { useTimer } from "hooks";

import "../Container.scss";

export const Timer = () => {
  const [time, isRunning, controls, timerSetup] = useTimer();
  const { toggle, reset } = controls;
  

  return (
      <div className="container">
        <Dial time={time} timer timerSetup={timerSetup} isRunning={isRunning}/>
        <ControlPanel isRunning={isRunning} onGo={toggle} onReset={reset} />
      </div>
  );
};
