import React, { FC } from "react";

import { Result } from "../../models";
import { GameResult, NameForm } from "./components";

interface GameProps {
  result: Result | null;
  handleStartGame: (name: string) => void;
}

export const Game: FC<GameProps> = ({ result, handleStartGame }) => {
  return (
    <>
      {result ? (
        <GameResult result={result} />
      ) : (
        <NameForm handleStartGame={handleStartGame} />
      )}
    </>
  );
};
