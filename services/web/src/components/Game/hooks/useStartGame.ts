import { useState } from "react";
import { useApiClient } from "../../../infrastructure";
import { Result } from "../../../models";

type StartGame = () => {
  gameResult: Result | null;
  handleStartGame: (name: string) => void;
};

export const useStartGame: StartGame = () => {
  const [gameResult, setGameResult] = useState<Result | null>(null);
  const apiClient = useApiClient();

  const handleStartGame = async (name: string): Promise<void> => {
    const result = await apiClient.StartGame(name);
    setGameResult(result);
  };

  return {
    gameResult,
    handleStartGame,
  };
};
