import React from "react";


const Todo = ({text, todo, todos, setTodos}) => {// Events
    const deleteHandler = () => {
        console.log(todo);  // current todo elem
        setTodos(todos.filter((elem) => elem.id !== todo.id)); // compare each elem to current todo & filter out same id
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed // preserve all item states except reverse completed
                };
            }
            return item;
            })
        );
    }

    return (
        <div className="todo">
            <li className={ `todo-item ${ todo.completed ? "completed" : '' }` }>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>

    );
};

export default Todo;