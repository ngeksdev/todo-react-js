interface Todo {
  id: React.Key;
  text: string;
}

type CreateTodo = {
  (text: string): void;
};

export { Todo, CreateTodo };
