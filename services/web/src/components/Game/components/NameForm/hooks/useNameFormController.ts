import { useState } from "react";

type NameFormController = (handleStartGame: (name: string) => void) => {
  name: string;
  handleNameChange: (name: string) => void;
  handleSubmit: () => void;
};

export const useNameFormController: NameFormController = (handleStartGame) => {
  const [name, setName] = useState("");

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleSubmit = () => {
    handleStartGame(name);
  };

  return {
    name,
    handleNameChange,
    handleSubmit,
  };
};
