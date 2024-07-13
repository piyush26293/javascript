import { useState } from "react";
import "./UserCrud.css";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";
export function UserCrudWrapper(){
//     const usersList =   [ 
//     {
//         id:1,
//         firstName: "Rohit",
//         lastName: "sharma",
//         email:"rohit@gmail.com",
//         mobile:"9876787678"
//     },
//     {
//         id:2,
//         firstName: "Hardik",
//         lastName: "Pandeya",
//         email:"hardik@gmail.com",
//         mobile:"9876787678"
//     },
//     {
//         id:3,
//         firstName: "Virat",
//         lastName: "Kohli",
//         email:"kohli@gmail.com",
//         mobile:"9876787678"
//     }
// ]
    const [usersList, setUserList] = useState([
        {
                    id:1,
                    firstName: "Rohit",
                    lastName: "sharma",
                    email:"rohit@gmail.com",
                    mobile:"9876787678"
                }
    ])

    return <div className="user-crud-wrapper">


        <UserForm onUserFormSubmit ={(values)=>{
            console.log('User created', values)
            values.id = usersList.length+1
            usersList.push(values)
            setUserList([...usersList])
        
}}></UserForm>

           

          <UserList usersList={usersList}></UserList>
        

        {/* <div className="user-creation-form">
            <input placeholder="first Name"></input>
            <input placeholder="last Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="mobile"></input>
        </div> */}
        
       
    </div>
}