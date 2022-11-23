import * as React from 'react';

import TodoItem from './TodoItem';
import { Todo } from '../types';
import styles from './Todos.module.css';

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul className={styles.todos}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default Todos;
