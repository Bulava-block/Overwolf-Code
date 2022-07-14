import React, {
  Fragment,
  useEffect,
  useCallback,
  useState,
  useMemo,
  useRef,
} from "react";
import { render } from "react-dom";
import emitter from "./emitter";
import storage from "./storage";
import { getGameNameById } from "../consts";
import { getChallangesList } from "../utils/api";
import ChallengeItem from "./challengeItem";
import { insertAd } from "../utils";
import GameService from "./gameService";

const App = () => {
  const adRef = useRef(null);
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

  const forceRefresh = useCallback(async () => {
    console.log("Force refresh");
    const { userId, gameId } = await storage.waitForUserIdAndGameId();
    const challengesList = await getChallangesList(userId, gameId);
    if (challengesList.length > 0) {
      emitter.emit("challenges-update", challengesList);
    }
  }, []);

  useEffect(() => {
    function updateGame(key, data) {
      if (key === "gameId") {
        setGameId(data);
      }
    }
    emitter.on("storage-update-data", updateGame);
    emitter.on("challenges-force-fetch", forceRefresh);
    return () => {
      emitter.removeListener("storage-update-data", updateGame);
      emitter.removeListener("challenges-force-fetch", forceRefresh);
    };
  }, [setGameId, forceRefresh]);

  const gameName = useMemo(() => getGameNameById(gameId), [gameId]);

  useEffect(() => {
    if (adRef != null && adRef.current != null) {
      // Testing ads
      localStorage.owAdsForceAdUnit = "Ad_test";
      console.info("[AD] - Ad container ready to use.");
      insertAd(adRef.current);
    } else {
      console.error("[AD] - No container to use for ads.");
    }
  }, []);

  return (
    <Fragment>
      <div className="game-title" onClick={forceRefresh}>
        <h3>{gameName}</h3>
        <GameService gameId={gameId} />
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
      <div ref={adRef} className="ad-container"></div>
    </Fragment>
  );
};

render(<App />, document.getElementById("root"));
