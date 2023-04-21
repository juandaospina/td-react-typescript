import { TODO_FILTERS } from '../consts'

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoTitle = Pick<Todo, 'title'>

// type is used when define new types or change primitive values
export type ListOfTodos = Todo[]

// Genera tipos únicos para la propiedad a través de las constantes definidas en TODO_FILTERS
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
