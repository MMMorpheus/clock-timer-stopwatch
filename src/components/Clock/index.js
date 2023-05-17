import { Dial, ControlPanel } from "components";
import { useClock } from "hooks";

import "../Container.scss";

export const Clock = () => {
    const time = useClock()
  return (
    <div className="container">
      <Dial time={time} />
      {/* <ControlPanel
        onGo={toggle}
        isRunning={isRunning}
        onReset={reset}
        onLap={addLap}
      /> */}
    </div>
  );
};
