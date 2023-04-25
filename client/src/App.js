import React, { useState, useEffect } from "react";

import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos,setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    handleFilter();
    saveLocalTodos();

  }, [todos, status]);
  const handleFilter = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos)

    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("todos")===null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  }



  return (
    <div className="container">
      <header className="header">
        <h2>Dipesh's Todo List </h2>
      </header>
      <TodoForm
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setInputText={setInputText} />
    </div>
  );
}

export default App;
