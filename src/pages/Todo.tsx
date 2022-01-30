import React, { FC } from 'react';
import {default as TodoList} from '../components/Todo/Todo';

const Todo:FC = () => {
  
  return (
    <div>
      <h1>TODO page</h1>
      <TodoList/>
    </div>
  );
};

export default Todo;