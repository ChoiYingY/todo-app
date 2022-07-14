import React, { useState, useEffect } from "react";    // {} is for importing something specific from the react library
import './App.css';
// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // State note: useState meant to "preserve" some values btwn func calls. You can only pass state & props downward
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');  // default selection status: show all todos
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // RUN ONCE WHEN THE APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []);

  // tells React that your component needs to do something after render
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);  // rerun everytime todo/status change

  // save all todos to local
  const saveLocalTodos = () => {
    if(todos.length > 0){
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  // fetch local todos
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div classNasme="App">
        <header>
        <h1>Choi Ying's Todo List</h1>
        </header>
        <Form
          todos={todos} setTodos={setTodos}
          inputText={inputText} setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList
          setTodos={setTodos} todos={todos}
          filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;