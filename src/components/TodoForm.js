import React, { useState, useEffect, useRef } from "react";
import "./components.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      value: input,
      ready: false
    });
    setInput("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your input"
            value={input}
            onChange={inputHandler}
            ref={inputRef}
            className="searchTerm mrg"
          />
          <input type="submit" name="Update" className="searchButton mrg" value="Update"/>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Type some ToDo"
            value={input}
            onChange={inputHandler}
            ref={inputRef}
            className="searchTerm"
          />
          <input type="submit" name="Add Todo" className="searchButton" value="Add todo"/>
        </>
      )}
    </form>
  );
}

export default TodoForm;
