import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task: newTodo }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      });
    });
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: todo.task.toUpperCase() };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCase ALL</button>
    </div>
  );
}
