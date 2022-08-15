import { useState, useEffect } from 'react';

export default function useGameInFocus() {
  const [inFocus, setInFocus] = useState(false);

  const getGameInfo = () =>
    new Promise((resolve) => window.overwolf.games.getRunningGameInfo(resolve));

  useEffect(() => {
    getGameInfo().then((results) => {
      if (results && results.success) {
        setInFocus(results.isRunning && results.isInFocus);
      }
    });
  }, []);

  useEffect(() => {
    function onGameInfoUpdated(e) {
      if (e.focusChanged && e.gameInfo) {
        setInFocus(e.gameInfo.isRunning && e.gameInfo.isInFocus);
      }
    }

    window.overwolf.games.onGameInfoUpdated.addListener(onGameInfoUpdated);

    return () => {
      window.overwolf.games.onGameInfoUpdated.removeListener(onGameInfoUpdated);
    };
  }, []);

  return inFocus;
}
