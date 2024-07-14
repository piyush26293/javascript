import { useState } from "react";
import "./UserCrud.css";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";
import {Routes,Route, Link, useNavigate } from 'react-router-dom';

export function UserCrudWrapper() {
    const navigate = useNavigate()
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
      id: 1,
      firstName: "Rohit",
      lastName: "sharma",
      email: "rohit@gmail.com",
      mobile: "9876787678",
    },
  ]);

  const [userToBeUpdated, setUserToBeUpdated] = useState(null);

  const onDelete = (id) => {
    const users = usersList.filter((user) => user.id !== id);
    setUserList([...users]);
  };

  return (
    <div className="user-crud-wrapper">
      <Routes>
        <Route path="/" element={<div>User Crud Wrapper</div>}></Route>
        <Route
          path="/list"
          element={
            <UserList
              usersList={usersList}
              onUserUpdate={(user) => {
                console.log("Updating user", user);
                setUserToBeUpdated(user);
                navigate("/users/form")
              }}

              onUserDelete={(id) => {
                // alert("Delete user"+id)
                const bool = window.confirm("Do you want to delete this ID");
                console.log(bool);
                if (bool) {
                  onDelete(id);
                }
              }}
            ></UserList>
          }
        ></Route>
        <Route
          path="/form"
          element={
            <UserForm
              user={userToBeUpdated}
              onUserFormSubmit={(user, id) => {
                console.log("User created", user);

                if (id) {
                  const fUser = usersList.find(
                    (userItem) => userItem.id === id
                  );
                  fUser.firstName = user.firstName;
                  fUser.lastName = user.lastName;
                  fUser.email = user.email;
                  fUser.mobile = user.mobile;
                  setUserToBeUpdated(null);
                } else {
                  user.id = usersList.length + 1;
                  usersList.push(user);
                }
                setUserList([...usersList]);
                 //navigate
                navigate("/users/list");

                
              }}
            ></UserForm>
          }
        ></Route>
      </Routes>

      {/* <UserForm user={userToBeUpdated} onUserFormSubmit ={(user, id)=>{
            console.log('User created', user)

            if(id){
                const fUser = usersList.find(userItem => userItem.id ===id );
                fUser.firstName = user.firstName;
                fUser.lastName = user.lastName;
                fUser.email = user.email;
                fUser.mobile = user.mobile;
                setUserToBeUpdated(null)
            }else{
                user.id = usersList.length+1
                usersList.push(user)
            }
            setUserList([...usersList])
        
}}></UserForm>

           

          <UserList usersList={usersList} onUserUpdate={(user)=>{
            console.log("Updating user", user)
            setUserToBeUpdated(user)
          }} onUserDelete={(id)=>{
            // alert("Delete user"+id)
            const bool =window.confirm("Do you want to delete this ID");
            console.log(bool)
            if(bool){
            onDelete(id)
            }
          }}></UserList> */}

      {/* <div className="user-creation-form">
            <input placeholder="first Name"></input>
            <input placeholder="last Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="mobile"></input>
        </div> */}
    </div>
  );
}
