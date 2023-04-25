import React from "react";

import Button from "@material-ui/core/Button";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { ButtonGroup } from "@material-ui/core";
//import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

const Todo = ({ text, todo, todos, setTodos, setInputText }) => {
  const handleDelete = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const handleEdit = () =>{
    const filteredItems = todos.filter((item) => item.id !== todo.id);
    const selectedItem = todos.find((item) => item.id === todo.id);
    setInputText(selectedItem.text);
    setTodos(filteredItems);
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}{" "}
      </li>
      <ButtonGroup>
        <Button
          className="complete-btn"
          variant="contained"
          color="primary"
          onClick={handleComplete}
        >
          <DoneOutlineIcon />
        </Button>
        <Button
          className="edit-btn"
          variant="contained"

          onClick={handleEdit}
        >
          <EditOutlinedIcon />
        </Button>
        <Button
          className="trash-btn"
          variant="contained"
          color="secondary"
          onClick={handleDelete}
        >
          <DeleteOutlineIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Todo;
