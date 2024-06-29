import { useState } from "react";

export function TodoList(){
    const [todos, setTodos] = useState([{taskId:1, name:"rohit"},{taskId:2, name:"ram"},{taskId:3, name:"ronit"}])
    const [text, setText] = useState();

    const onInputChange = (e) =>{
        console.log(e.target.value)
        setText(e.target.value)
    }

    return <div>
        <input placeholder="Enter Todo" value={text} onChange={onInputChange}></input>
        <button onClick={() =>{
            const updatedTodos = [...todos];
            updatedTodos.push({name:text, taskId:todos.length+1});
            console.log(updatedTodos);
            setTodos(updatedTodos);

        }}>Add</button>

        {todos.map((todo)=>{
            return <p key={todo.taskId}>{todo.name}</p>
        })}
    </div>
}




// import { useState } from "react";
// export function TodoList(){
//     const [todos, setTodos] = useState(["Task1","Task2"])


//     const getTodos = () =>{
//         const todoElement = [];
//         todos.forEach (todo =>{todoElement.push(<p>{todos}</p>)})
//         return todoElement;
//     }

//     return <div> Todo List
//         <p>{todos[0]}</p>
//         <p>{todos[1]}</p>
//         {getTodos()}
//     </div>

// }