import { useState } from "react";

type NameFormController = (handleStartGame: (name: string) => void) => {
  name: string;
  error: string;
  handleNameChange: (name: string) => void;
  handleSubmit: () => void;
};

export const useNameFormController: NameFormController = (handleStartGame) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const validate = (name: string): boolean => {
    if (!name) {
      setError("Name can't be empty");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const isValid = validate(name);

    if (!isValid) {
      return;
    }

    handleStartGame(name);
  };

  return {
    name,
    error,
    handleNameChange,
    handleSubmit,
  };
};
