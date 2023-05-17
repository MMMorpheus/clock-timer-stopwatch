import ControlPanel from "../Organizer/DesignElements/ControlPanel/ControlPanel";
import Dashboard from "../Organizer/DesignElements/StopwatchDashboard/Dashboard";

import { Dial } from "../";

import "./StopWatch.scss";
import {useStopwatch} from "../../hooks"

export const StopWatch = () => {
    const [time, results, isRunning, controls] = useStopwatch()
    const {toggle, reset, addLap} = controls;

  return (
    <section>
      <article className="stopWatch">
        <Dial time={time} />
        <ControlPanel
          onGo={toggle}
          isRunning={isRunning}
          onReset={reset}
          onLap={addLap}
        />
      </article>
      {results.length === 0 ? null : <Dashboard results={results} />}
    </section>
  );
};
