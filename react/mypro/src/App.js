import logo from './logo.svg';
import './App.css'; 
import { Counter } from './counter/counter';
import { Forms } from './forms/forms';
import { Counter2 } from './counter2/counter2';
import { UserProfile } from './UserProfile/UserProfile';
import { TodoList } from './TodoList/TodoList';
import { UsersList } from './UserProfile/UserList';
import { Flag } from './Flag/flag';
import { FormExample } from './FormExample';
import { FormikExample } from './FormikExample';
import { ImageCarasoul } from './ImageCarasoul/imageCarasoul';
import { ContextExample } from './context/ContextExample';
import { UseEffectExample } from './UseEffect/UseEffectExample';
import { UseEffectExample2 } from './UseEffect/UseEffectExample2';
import { useState } from 'react';
import { UserCrudWrapper } from './UserCrud/UserCrudWrapper';
import {Routes,Route, Link, useNavigate } from 'react-router-dom';



function App() {
  // const [name, setName] = useState("Rohit");
  const navigate  = useNavigate();
  return (
    <div class="app">

      {/* APP COMPONENT */}

      <div className='header'>APP Component</div>
      <div className='container-body'>
        <div className='sidebar'>
          <Link to={"/"}>Home</Link>
          <Link to={"/counter-path"}>Counter</Link>
          <Link to={"/users"}>Users</Link>
          {/* <Link to={"/greeting"}>Greeting</Link> */}
          <button onClick={()=>{
            navigate("/greeting-path")
          }}>Increase</button>
        
        </div>
        <div className='content'>
          
          <Routes>
            <Route path='/' element={<div>Content</div>}></Route>
            <Route path='/counter-path' element={<Counter></Counter>}></Route>
            <Route path='/greeting-path' element={<Counter2></Counter2>}></Route>
            <Route path='/users/*' element={<UserCrudWrapper></UserCrudWrapper>}></Route>
            <Route path='*' element={<div>This url is not mapped</div>}></Route>
          </Routes>
        </div>

      </div>



    {/* <Counter name="rohit"></Counter>
    <br></br>
    <Counter name="rohit" lastname="olly"></Counter>
    <p>Hello Coder</p>
    <Forms></Forms>
    <br></br><br></br>
    <hr></hr>
    <UserProfile />


    <Counter2 coutnerName="Counter1" ></Counter2>

    <hr></hr>
    <Counter2 coutnerName="Counter2" ></Counter2> */}

    {/* <TodoList /> */}
    {/* <UsersList />
    <Flag /> */}

    {/* <TodoList /> */}

    {/* <FormExample></FormExample> */}
    {/* <FormikExample></FormikExample> */}
    {/* <ImageCarasoul></ImageCarasoul> */}
    {/* <ContextExample></ContextExample> */}

    {/* <UseEffectExample></UseEffectExample> */}
    {/* <UseEffectExample2 name={name}></UseEffectExample2>
    <button onClick={ ()=>setName(name+Math.random()*9)}>changes name</button> */}


    {/* Mini Project */}

    {/* <UserCrudWrapper></UserCrudWrapper> */}





    </div>
  );
}

export default App;
