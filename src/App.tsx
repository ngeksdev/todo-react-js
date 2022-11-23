import * as React from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  // list of todos
  const todoList = todos;

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

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todoList} />
    </div>
  );
}

export default App;
