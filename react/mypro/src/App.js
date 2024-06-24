import logo from './logo.svg';
import './App.css'; 
import { Counter } from './counter/counter';
import { Forms } from './forms/forms';

function App() {
  return (
    <div class="app">
    <Counter name="rohit"></Counter>
    <br></br>
    <Counter name="rohit" lastname="olly"></Counter>
    <p>Hello Coder</p>
    <Forms></Forms>
    

    </div>
  );
}

export default App;
