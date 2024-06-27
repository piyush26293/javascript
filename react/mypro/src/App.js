import logo from './logo.svg';
import './App.css'; 
import { Counter } from './counter/counter';
import { Forms } from './forms/forms';
import { Counter2 } from './counter2/counter2';

function App() {
  return (
    <div class="app">
    <Counter name="rohit"></Counter>
    <br></br>
    <Counter name="rohit" lastname="olly"></Counter>
    <p>Hello Coder</p>
    <Forms></Forms>
    <br></br><br></br>
    <hr></hr>


    <Counter2 coutnerName="Counter1" ></Counter2>

    <hr></hr>
    <Counter2 coutnerName="Counter2" ></Counter2>

    </div>
  );
}

export default App;
