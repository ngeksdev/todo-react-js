import React from 'react';

interface Todo {
  id: React.Key;
  text: string;
}

type CreateTodo = {
  (text: string): void;
};

type RemoveTodo = {
  (id: string): void;
};

export { Todo, CreateTodo, RemoveTodo };
