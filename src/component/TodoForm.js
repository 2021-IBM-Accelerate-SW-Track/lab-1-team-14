import {Button, TextField} from "@material-ui/core"
import React, { useState } from "react";
import { v4 as uuid.v4 } from 'uuid';
// import { unmountComponentAtNode } from "react-dom";

/* DESCRIPTION
 * Handles: text input and text submission
 */

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "", 
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({...todo, id: uuid.v4()});
            
            //rest task input
            setTodo({...todo, task: ""});
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task" 
                name = "task"
                type = "text"
                value = {todo.task}
                onChange = {handleTaskInputChange}
            />
            <Button type="submit">submit</Button>
        </form>
    );
}

export default TodoForm