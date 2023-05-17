import { Dial, ControlPanel, Dashboard } from "components";
import { useStopwatch } from "hooks";

import "../Container.scss";

export const StopWatch = () => {
  const [time, results, isRunning, controls] = useStopwatch();
  const { toggle, reset, addLap } = controls;

  return (
    <>
      <div className="container">
        <Dial time={time} />
        <ControlPanel
          onGo={toggle}
          isRunning={isRunning}
          onReset={reset}
          onLap={addLap}
        />
      </div>
      {results.length > 0 && <Dashboard results={results} />}
    </>
  );
};
