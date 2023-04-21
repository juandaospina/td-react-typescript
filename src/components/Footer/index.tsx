import React from "react";

import { FilterValue } from "../../types";
import { Filters } from "../Filters";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSeleted: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
  onClearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  filterSeleted,
  onFilterChange,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters filterSeleted={filterSeleted} onFilterChange={onFilterChange} />
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar completados
        </button>
      )}
    </footer>
  );
};
