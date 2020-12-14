import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoFilter from "./TodoFilter";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [status, setStatus] = useState("all");

  const addTodo = (todo) => {
    if (!todo.value || /^\s*$/.test(todo.value)) {
      return null;
    }
    setTodos([todo, ...todos]);
  };
  const filterHandler = (filter) => {
    setStatus(filter);
  };

  const filterEffectHandler = () => {
    console.log("filterEffectHandler func is run ..");
    switch (status) {
      case "ready":
        setFilterTodos(todos.filter((todo) => todo.ready));
        break;
      case "todo":
        setFilterTodos(todos.filter((todo) => !todo.ready));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterEffectHandler();
  }, [status, todos]);

  const updateTodo = (todoId, newValue) => {
    if (!newValue.value || /^\s*$/.test(newValue.value)) {
      return null;
    }
    setTodos(todos.map((item) => (item.id === todoId ? newValue : item)));
  };

  const completeTodo = (id) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        todo.ready = !todo.ready;
      }
      return todo;
    });
    setTodos(newArr);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  return (
    <div>
      <h1 className="title">What ToDo for today ??</h1>
      <TodoFilter onChangeFilter={filterHandler} />
      <TodoForm onSubmit={addTodo} />
      <ul>
        <Todo
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          filterTodos={filterTodos}
          completeTodo={completeTodo}
        />
      </ul>
    </div>
  );
}

export default TodoList;
