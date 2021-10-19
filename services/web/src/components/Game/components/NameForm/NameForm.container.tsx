import { FC } from "react";
import { useNameFormController } from "./hooks";
import { NameForm } from "./NameForm.component";

interface NameFormContainerProps {
  handleStartGame: (name: string) => void;
}

export const NameFormContainer: FC<NameFormContainerProps> = ({
  handleStartGame,
}) => {
  const { name, error, handleNameChange, handleSubmit } =
    useNameFormController(handleStartGame);

  return (
    <NameForm
      name={name}
      error={error}
      handleNameChange={handleNameChange}
      handleSubmit={handleSubmit}
    />
  );
};
