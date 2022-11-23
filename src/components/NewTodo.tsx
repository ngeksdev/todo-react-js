import * as React from 'react';

import { CreateTodo } from '../types';

const NewTodo: React.FC<{ onAddTodo: CreateTodo }> = ({ onAddTodo }) => {
  const todoTextInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const todoTextInput = todoTextInputRef.current!.value;

    // check if blank
    if (todoTextInput.trim().length === 0) return;

    // add todo
    onAddTodo(todoTextInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
