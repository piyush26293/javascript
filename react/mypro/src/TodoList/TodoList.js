import { useState } from "react";
export function TodoList(){
    const [todos, setTodos] = useState(["Task1","Task2"])


    const getTodos = () =>{
        const todoElement = [];
        todos.forEach (todo =>{todoElement.push(<p>{todos}</p>)})
        return todoElement;
    }

    return <div> Todo List
        <p>{todos[0]}</p>
        <p>{todos[1]}</p>
        {getTodos()}
    </div>

}