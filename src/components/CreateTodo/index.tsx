import React, { useState } from "react";
import { TodoTitle } from "../../types";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput = (event: any) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    saveTodo({title: inputValue});
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(event) => onChangeInput(event)}
        onKeyDown={() => {}}
        placeholder="¿Qué tarea quieres hacer?"
        autoFocus
      />
    </form>
  );
};
