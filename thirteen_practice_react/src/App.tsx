import React from "react";

import { Todo } from "./todo.model";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: Math.random().toString(),
        text,
      },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevState) => prevState.filter((prev) => prev.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
