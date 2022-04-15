import React, { Fragment, useEffect, useState, useMemo } from "react";
import { render } from "react-dom";
import emitter from "./emitter";
import storage from "./storage";
import { getGameNameById } from "../consts";
import { getChallangesList } from "../utils/api";
import { getProgressByChallange } from "../utils/number";

const App = () => {
  const [challengeList, setChallengeList] = useState([]);
  const [gameId, setGameId] = useState(storage.getData().gameId);
  const [userId, setUserId] = useState(storage.getData().userId);

  useEffect(() => {
    async function updateChallangeList() {
      const { userId, gameId } = await storage.waitForUserIdAndGameId();
      const challengesList = await getChallangesList(userId, gameId);
      setChallengeList(challengesList);
    }
    emitter.on("challenges-update", updateChallangeList);
    updateChallangeList();
    return () =>
      emitter.removeListener("challenges-update", updateChallangeList);
  }, []);

  useEffect(() => {
    async function setUserIdAndGameId() {
      const { userId, gameId } = await storage.waitForUserIdAndGameId();
      setUserId(userId);
      setGameId(gameId);
    }
    setUserIdAndGameId();
  }, []);

  const gameName = useMemo(() => getGameNameById(gameId), [gameId]);

  return (
    <Fragment>
      <div className="game-title">{gameName}</div>
      <div id="challenge-panel" className="challenge-panel">
        <h5>Current Challenge</h5>
        {challengeList.map(({ id, label, complete, incomplete, state }, i) => (
          <div key={`ch-${i}-${id}`} className="challenge-item">
            <p>
              {label}: {state}
            </p>
            <div className="progress-bg">
              <div
                className="progress-bar"
                style={{
                  width: `${getProgressByChallange(complete, state)}%`,
                }}
              ></div>
            </div>
            <div className="progress-value">
              <label className="earned">{incomplete}</label>
              <label className="goal">{complete}</label>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

render(<App />, document.getElementById("root"));
