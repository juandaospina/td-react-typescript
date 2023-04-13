import React, { useState } from "react";

import { Todos } from "./components/Todos";
import { Todo } from "./types";

const mockTodos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: true,
  },
];

export const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);

  // This function control the delete todo
  const onDeleteHandler = (id: number) => {
    const todosListNew = todos.filter((todo) => todo.id !== id);
    setTodos(todosListNew);
  };

  return (
    <React.Fragment>
      <span>Hola mundo</span>
      <div className="todoapp">
        <Todos todos={todos} onTodoRemove={onDeleteHandler}/>
      </div>
    </React.Fragment>
  );
};

export default App;
