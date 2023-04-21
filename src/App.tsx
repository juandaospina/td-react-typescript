import React, { useState } from "react";

import { FilterValue, Todo, TodoTitle } from "./types";
import { Todos, Footer, Header } from './components'
import { TODO_FILTERS } from "./consts";

const mockTodos = [
  {
    id: '1',
    title: "Todo 1",
    completed: false,
  },
  {
    id: '2',
    title: "Todo 2",
    completed: false,
  },
  {
    id: '3',
    title: "Todo 3",
    completed: true,
  },
];

export const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  /*
    ↓ These methods control actions on todos, remove, add, complete 
  */
  // This function control the delete todo
  const onDeleteHandler = (id: string): void => {
    const todosListNew = todos.filter((todo) => todo.id !== id);
    setTodos(todosListNew);
  };

  // This function control the complete or uncomplete todo
  const onCompletedHandler = (id: string, completed: boolean): void => {
    const todosListNew = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : { ...todo }
    );
    setTodos(todosListNew);
  };

  const onFilterChangeHandler = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const onCompleteRemoveHandler = () => {
    const newTodos = todos.filter(todo => todo.completed !== true);
    setTodos(newTodos);
  }

  const onTodosFilter = todos.filter(todo => {
    if (filterSelected === 'active') return todo.completed === false;
    if (filterSelected === 'completed') return todo.completed === true;
    return todo;
  })

  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      title,
      // crypto is a new property of object window
      id: crypto.randomUUID(),
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const activeCount = todos.filter(todo => todo.completed === false).length;
  const completedCount = todos.length - activeCount;

  return (
    <React.Fragment>
      <div className="todoapp">
        <Header onAddTodo={handleAddTodo}/>
        <Todos
          todos={onTodosFilter}
          onTodoRemove={onDeleteHandler}
          onTodoComplete={onCompletedHandler}
        />
        <Footer 
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={onCompleteRemoveHandler}
          filterSeleted={filterSelected}
          onFilterChange={onFilterChangeHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
