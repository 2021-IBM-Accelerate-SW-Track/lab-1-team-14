import Typography from "@material-ui/core/Typography"
import Header from "./component/header"
import React, { useEffect, useState } from "react";
import './App.css';
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import { CenterFocusStrong } from "@material-ui/icons";


// const [state, seState] = useState([]);
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }


  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }


  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <div className="App">
        <Typography variant="h1" style={{padding: 16}}>
          React Todo
        </Typography>
        <TodoForm addTodo={addTodo}/>
        <TodoList
          todos={todos} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
