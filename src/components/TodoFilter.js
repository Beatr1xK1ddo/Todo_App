import React, { useState } from "react";

function TodoFilter({ onChangeFilter }) {
  const [filter, setFilter] = useState({
    value: '',
    bool: false
  });
  const filterHandler = (e) => {
    e.preventDefault();
    const newState = e.target.value
    onChangeFilter(newState)
    setFilter(newState)
  };

  return (
    <div>
      <select value={filter} onChange={filterHandler} className="secelt">
        <option value="all">All</option>
        <option value="ready">Completed</option>
        <option value="todo">Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoFilter;
