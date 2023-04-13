import React from "react";
import { type Todo as TodoType } from "../../types";

interface Props extends TodoType {
  onTodoRemove: (id: number) => void;
  onTodoComplete: (id: number, completed: boolean) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onTodoRemove,
  onTodoComplete,
}) => {
  const onToggleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    console.log("[checked_todo]", event.target.checked);
    onTodoComplete(id, checked)
  };

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        // onChange={(event) =>
        //   onTodoComplete(id, (completed = event.target.checked))
        // }
        onChange={(event) => onToggleCheck(event)}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onTodoRemove(id)}></button>
    </div>
  );
};
