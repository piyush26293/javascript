import {useState} from "react";

export function Counter2(props){
    // let count =0;
    let [count, setCount]=useState(5);
    const increment = ()=>{
        // console.log("Current count", count );
        // count++;
        // console.log("Updated Count",count)

        const updatedCount = count+1;
        setCount(updatedCount)
        console.log("Updated Count", updatedCount);
    }

    return <div>
        <p>Counter Component : {props.counterName}</p>
        Count : {count}
        <br></br><br></br>
        <button onClick={increment}>Increment</button>
    </div>
}



// Prop - data passad from parent component to child component