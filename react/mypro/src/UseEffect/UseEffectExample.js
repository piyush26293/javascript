import { useEffect, useState } from "react"


export function UseEffectExample(){

    const  [counter, setCounter] = useState(0);
    const  [counter2, setCounter2] = useState(0);

    // Syntax
    // useEffect(()=>{},[])
    // Example 1 - without dependancy array -> This effect is execute to every render

    useEffect (()=>{
        console.log('1 - This is executed to every render');
    })


    // Example 2 - with empty dependency Array
    useEffect(()=>{
        console.log('2 - This is executed only once when component is renderd.')
    },[])


    // Example 3 - with dependency Array
    useEffect(()=>{
        console.log('3 - This is executed only once when component is renderd.')
    },[counter])

     // Example 4 - with multipale dependency Array
     useEffect(()=>{
        console.log('4 - This is executed only once when component is renderd.')
    },[counter, counter2])


    return <div>
        Use Effect Example
        {counter}
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        {counter2}
        <button onClick={()=>setCounter2(counter2+1)}>Increment2</button>
    </div>
}