import * as React from 'react';

import { Todo, CreateTodo, RemoveTodo } from '../types';

type TodosContextObj = {
  todos: Todo[];
  addTodo: CreateTodo;
  removeTodo: RemoveTodo;
};

export const TodosContext = React.createContext<TodosContextObj>({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  // add todo
  const handleAddTodo = (todoText: string) => {
    const newTodo: Todo = {
      id: new Date().toISOString(),
      text: todoText
    };

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  // remove todo
  const handleRemoveTodo = (id: string) => {};

  const contextValue: TodosContextObj = {
    todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
