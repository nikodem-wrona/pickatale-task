import { FC } from "react";
import { Result } from "../../../../models";
import { GameResult } from "./GameResult.component";

interface GameResultContainerProps {
  result: Result;
}

export const GameResultContainer: FC<GameResultContainerProps> = ({
  result,
}) => {
  return <GameResult result={result} />;
};
