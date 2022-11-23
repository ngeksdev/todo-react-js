import * as React from 'react';

import { TodosContext } from '../store/todos';
import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = React.useContext(TodosContext);

  const todoTextInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const todoTextInput = todoTextInputRef.current!.value;

    // check if blank
    if (todoTextInput.trim().length === 0) return;

    // add todo
    todosCtx.addTodo(todoTextInput);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="text">Todo</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
