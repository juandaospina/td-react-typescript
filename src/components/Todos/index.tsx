import React from "react";

import { type ListOfTodos } from "../../types";
import { Todo } from "../Todo";

interface Props {
  todos: ListOfTodos;
  onTodoRemove: (id: number) => void;
  onTodoComplete: (id: number, completed: boolean) => void;
}

export const Todos: React.FC<Props> = ({ todos, onTodoRemove, onTodoComplete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onTodoRemove={onTodoRemove}
            onTodoComplete={onTodoComplete}
          />
        </li>
      ))}
    </ul>
  );
};
