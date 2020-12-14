import React, { useState } from "react";
import "./components.css";
import { BiEdit,BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import TodoForm from "./TodoForm";

function Todo({ removeTodo, updateTodo, filterTodos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    ready: false
  });

  const submitUpdate = (inputNewValue) => {
    updateTodo(edit.id, inputNewValue);
    setEdit({
        id: null,
        value: "",
        ready: false
      });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return filterTodos.map((todo, i) => {
    return ( 
      <li className={todo.ready ? "todo__List-item complete" : "todo__List-item"} key={i}>
        {`${i + 1}) ${todo.value}`}
        <div className="icons">
          <BiMessageSquareAdd onClick={() => completeTodo(todo.id)} />
          <BiEdit onClick={() => setEdit({ id: todo.id, value: todo.value, ready: todo.ready })} />
          <AiOutlineDelete onClick={() => removeTodo(todo.id)} />
        </div>
      </li>
    );
  });
}

export default Todo;
