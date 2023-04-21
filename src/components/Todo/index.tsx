import React from "react";
import { type Todo as TodoType } from "../../types";

interface Props extends TodoType {
  onTodoRemove: (id: string) => void;
  onTodoComplete: (id: string, completed: boolean) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onTodoRemove,
  onTodoComplete,
}) => {
  const onToggleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target; // Receives the event check from the input
    onTodoComplete(id, checked);
  };

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={(event) => onToggleCheck(event)}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onTodoRemove(id)}></button>
    </div>
  );
};
