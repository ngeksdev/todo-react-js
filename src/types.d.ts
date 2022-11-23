interface Todo {
  id: React.Key;
  text: string;
}

type CreateTodo = {
  (text: string): void;
};

type RemoveTodo = {
  (id: React.Key): void;
};

export { Todo, CreateTodo, RemoveTodo };
