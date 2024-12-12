import { useState } from "react";
import { TodoItem } from "../types";

export const useModuleFlux = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: "111", completed: false },
    { id: 2, text: "222", completed: true },
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1, text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, removeTodo };
};