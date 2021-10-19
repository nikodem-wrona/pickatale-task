import { FC } from "react";
import { useNameFormController } from "./hooks";
import { NameForm } from "./NameForm.component";

interface NameFormContainerProps {
  handleStartGame: (name: string) => void;
}

export const NameFormContainer: FC<NameFormContainerProps> = ({
  handleStartGame,
}) => {
  const { name, handleNameChange, handleSubmit } =
    useNameFormController(handleStartGame);

  return (
    <NameForm
      name={name}
      handleNameChange={handleNameChange}
      handleSubmit={handleSubmit}
    />
  );
};
