import { type Todo as TodoType } from '../../types';

interface Props extends TodoType {
    onTodoRemove: (id: number) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onTodoRemove }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type='checkbox'
        onChange={() => {}}
      />
      <label>{ title }</label>
      <button className='destroy' onClick={() => onTodoRemove(id)}></button>
    </div>
  );
};
