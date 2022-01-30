import React, { FC, useEffect, useState } from 'react';
import { ITodoItem } from '../../models/Todo';
import TodoItem from './TodoItem';
import './Todo.scss'
import TodoForm from './TodoForm';


const Todo:FC = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([])
  
  useEffect(() => {
    setTodoItems([
      {
        id: 1,
        name: 'Заказать еду',
        complete: false
      },
      {
        id: 2,
        name: 'Заказать еду 2',
        complete: false
      },
      {
        id: 3,
        name: 'Заказать еду 3',
        complete: false
      }
    ])
  }, [])

  const addTodoItem = (name:string) => {
    setTodoItems([...todoItems, {
      id: Date.now(),
      name,
      complete: false
    }])
  }

  const deleteTodoItem = (id:number) => {
    setTodoItems(todoItems.filter(item => item.id !== id))
  }

  const changeCompleteTodoItem = (id:number) => {
    const copyTodoItems = [...todoItems]

    const items = copyTodoItems.map(element => {
      if(element.id === id) element.complete = !element.complete
      return element
    })

    setTodoItems(items)
  }

  return (
    <div className='todo'>
      <TodoForm onSend={addTodoItem}></TodoForm>
      <div className='todo-list'>
        {todoItems.map((item, index) => 
          <TodoItem key={item.id} {...item} onDelete={deleteTodoItem} onComplete={changeCompleteTodoItem}/>
        )}
      </div>
    </div>
  );
};

export default Todo;