import * as React from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos';
import styles from './Todos.module.css';

const Todos: React.FC = () => {
  const todosCtx = React.useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default Todos;
