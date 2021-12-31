import React, { Fragment, useEffect, useState } from "react";
import { render } from "react-dom";
import emitter from "./emitter";
import { challenges } from "./challenge_list";

const App = () => {
  const [challengeList, setChallengeList] = useState(
    challenges.getChallengeList()
  );

  useEffect(() => {
    function updateChallangeList(list) {
      setChallengeList(list);
    }
    emitter.on("challenges-update", updateChallangeList);
    return () =>
      emitter.removeListener("challenges-update", updateChallangeList);
  }, [setChallengeList]);

  return (
    <Fragment>
      <h5>Daily Challenge</h5>
      {challengeList.map(
        ({ label, complete, incomplete, state, progress }, i) => (
          <div key={`ch-${i}`} className="challenge-item">
            <p>
              {label}: {state}
            </p>
            <div className="progress-bg">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-value">
              <label className="earned">{incomplete}</label>
              <label className="goal">{complete}</label>
            </div>
          </div>
        )
      )}
    </Fragment>
  );
};

render(<App />, document.getElementById("challenge-panel"));
