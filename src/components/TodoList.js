import React from "react";
// Importing components
import Todo from "./Todo";

function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo) => (
                        <Todo
                            setTodos={setTodos} todos={todos}
                            todo = {todo}
                            key={todo.id} text={todo.text}
                        />    // for every todo obj, create one Todo elem
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;