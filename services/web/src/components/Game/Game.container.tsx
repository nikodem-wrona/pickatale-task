import { FC } from "react";
import { Game } from "./Game.component";
import { useStartGame } from "./hooks";

export const GameContainer: FC = () => {
  const { handleStartGame, gameResult } = useStartGame();

  return <Game handleStartGame={handleStartGame} result={gameResult} />;
};
