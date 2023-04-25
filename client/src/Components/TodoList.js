import React from 'react';

import Todo from './Todo';
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const TodoList = ({todos, setTodos, filteredTodos, setInputText}) => {

    const handleDeleteAll = () =>{
        setTodos([]);
    }

    return (
        <div div="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos} 
                        text={todo.text}
                        setInputText={setInputText} />
                ))}
            </ul>
            <Button
                    className="deleteall-btn"
                    style={{margin: '0 auto',
                    display: "flex"}}
                    variant="contained"
                    color="secondary"
                    onClick={handleDeleteAll}
                  >
                      <p>Delete All</p>
                    <DeleteOutlineIcon />
                  </Button>
            
        </div>
    )
}

export default TodoList
