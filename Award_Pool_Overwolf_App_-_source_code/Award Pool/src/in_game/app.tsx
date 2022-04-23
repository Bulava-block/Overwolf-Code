import React, {
  Fragment,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from "react";
import { render } from "react-dom";
import emitter from "./emitter";
import storage from "./storage";
import { getGameNameById } from "../consts";
import { getChallangesList } from "../utils/api";
import ChallengeItem from "./challengeItem";

const App = () => {
  const [challengeList, setChallengeList] = useState([]);
  const [gameId, setGameId] = useState(storage.getData().gameId);

  useEffect(() => {
    function updateChallangeList(list) {
      if (challengeList.length > 0 && list.length > 0) {
        const newChallenges = [...list, ...challengeList];
        const ids = [];
        const newData = newChallenges.reduce((accumulator, challenge) => {
          if (ids.includes(challenge.id) === false) {
            ids.push(challenge.id);
            accumulator.push(challenge);
          }
          return accumulator;
        }, []);
        setChallengeList(newData);
      } else {
        setChallengeList(list);
      }
    }
    emitter.on("challenges-update", updateChallangeList);
    return () =>
      emitter.removeListener("challenges-update", updateChallangeList);
  }, [setChallengeList, challengeList]);

  useEffect(() => {
    function updateGame(key, data) {
      if (key === "gameId") {
        setGameId(data);
      }
    }
    emitter.on("storage-update-data", updateGame);
    return () => emitter.removeListener("storage-update-data", updateGame);
  }, [setGameId]);

  const gameName = useMemo(() => getGameNameById(gameId), [gameId]);

  const forceRefresh = useCallback(async () => {
    console.log("Force refresh");
    const { userId, gameId } = await storage.waitForUserIdAndGameId();
    const challengesList = await getChallangesList(userId, gameId);
    if (challengesList.length > 0) {
      emitter.emit("challenges-update", challengesList);
    }
  }, []);

  return (
    <Fragment>
      <div className="game-title" onClick={forceRefresh}>
        {gameName}
      </div>
      <div id="challenge-panel" className="challenge-panel">
        {challengeList.map(
          ({ id, label, complete, incomplete, state, won }, i) => (
            <ChallengeItem
              key={`ch-${i}-${id}`}
              id={id}
              label={label}
              complete={complete}
              incomplete={incomplete}
              state={state}
              won={won}
            />
          )
        )}
      </div>
    </Fragment>
  );
};

render(<App />, document.getElementById("root"));
