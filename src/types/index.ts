export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// type is used when define new types or change primitive values
export type ListOfTodos = Todo[]
