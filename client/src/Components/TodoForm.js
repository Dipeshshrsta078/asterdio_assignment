import React from "react";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/AddOutlined";

const TodoForm = ({
  todos,
  setTodos,
  setInputText,
  inputText,
  status,
  setStatus,
}) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !inputText
      ? alert("Fill Todo")
      : setTodos([
          ...todos,
          {
            text: inputText,
            completed: false,
            id: Math.random() * 1000,
          },
        ]);
    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Add a todo"
        value={inputText}
        required
        onChange={handleChange}
      />
      <Button
        className="todo-button"
        type="submit"
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        size="large"
      >
        {/* button icon */}
        <AddIcon />
      </Button>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
