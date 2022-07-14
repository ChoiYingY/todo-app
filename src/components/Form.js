import React from "react";


const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {   // props are args being passed into React component, aka Form here
    // write js code and function here, ev represent events
    const inputTextHandler = (ev) => {
        console.log(ev.target.value);   // ev.target = <input/>, and ev.target.input = user's input (whatever you typed)
        setInputText(ev.target.value);
    }

    const submitTodoHandler = (ev) => {
        ev.preventDefault();            // to prevent default action of refreshing when you click on the submit btn
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000}
        ]);  // ... just passed on old todos and added on the new todo
        setInputText("");   // only updates state of App's hooks if not setting input's value as {inputText}
    };

    const statusHandler = (ev) => {
        setStatus(ev.target.value);     // update status state of the app
    }

    return (
        // everytime todo-input is changed, it will trigger this handler and let it perform some actions
        <form>
            <input
                value={inputText} onChange={inputTextHandler}
                type="text" className="todo-input"
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;