import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

interface TodoFormProps {
  onSend: Function
}


const TodoForm:FC<TodoFormProps> = ({onSend, ...props}) => {
  const [name, setName] = useState<string>('')
  
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    onSend(name)
    setName('')
  }
  
  const handleChange  = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit} {...props}>
      <input type="text" value={name} onChange={handleChange}/>
      <button>Добавить</button>
    </form>
  );
};

export default TodoForm;