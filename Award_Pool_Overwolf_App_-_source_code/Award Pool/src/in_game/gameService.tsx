import React, { useState, useEffect } from "react";
import { checkOverwolfServiceByGameId } from "../utils/api";

const GameService = ({ gameId }: { gameId: undefined | number }) => {
  const [isWorking, setIsWorking] = useState(true);
  useEffect(() => {
    async function getOverwolfServiceStatus(gameId: number) {
      const newIsWorking = await checkOverwolfServiceByGameId(gameId);
      setIsWorking(newIsWorking);
    }
    if (gameId != null) {
      getOverwolfServiceStatus(gameId);
    }
  }, [setIsWorking, gameId]);

  return (
    <div className="widget game-service">
      <p>
        <span className={`service ${isWorking ? "up" : "down"}`}></span>
        {isWorking
          ? "Overwolf service for this game is online."
          : "Overwolf service for this game is unavailable."}
      </p>
    </div>
  );
};

export default GameService;
