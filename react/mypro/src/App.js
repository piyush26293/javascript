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

function App() {
  // const [name, setName] = useState("Rohit");
  return (
    <div class="app">
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

    <UserCrudWrapper></UserCrudWrapper>





    </div>
  );
}

export default App;
