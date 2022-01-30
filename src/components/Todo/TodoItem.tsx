import React, { FC, MouseEvent } from 'react';
import { ITodoItem } from '../../models/Todo';
import './TodoItem.scss'
import newId from '../../utils/newId'

interface TodoItemProps extends ITodoItem {
  onDelete: Function
  onChange?: Function
  onComplete: Function
}



const TodoItem:FC<TodoItemProps> = ({id, name, complete, comment, onDelete, onChange, onComplete, ...props}) => {
  const handleDelete = () => {
    onDelete(id)
  }

  const handleChangeComplete = () => {
    onComplete(id)
  }

  const formId = newId()

  return (
    <div className={`todo-item ${complete ? 'todo-item--complete' : ''}`}>
      <div className='todo-item__inner'>
        <div className='todo-item__complete'>
          <input id={formId} type="checkbox" checked={complete} onChange={handleChangeComplete}/>
        </div>
        <label className='todo-item__name' htmlFor={formId}>{name}</label>
        <div className='todo-item__comment'>{comment}</div>
        <button className='todo-item__delete' onClick={handleDelete}>x</button>
      </div>
    </div>
  );
};

export default TodoItem;