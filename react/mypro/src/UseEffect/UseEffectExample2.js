import { useEffect, useState } from "react"


export function UseEffectExample2({name}){

    const  [counter, setCounter] = useState(0);
    const  [counter2, setCounter2] = useState(0);

    // Syntax
    // useEffect(()=>{},[])
    // Example 1 - without dependancy array -> This effect is execute to every render

    // useEffect (()=>{
    //     console.log('1 - This is executed to every render');
    // })


    // Example 2 - with empty dependency Array
    useEffect(()=>{
        console.log('2 - This is executed only once when component is renderd.')
    },[])


    // Example 3 - with dependency Array
    useEffect(()=>{
        console.log('3 - This is executed only once when component is renderd.')

        //Cleanup Function
        return ()=>{
            console.log('I am Cleaning ups')
        }
    
    },[counter])

     // Example 4 - with multipale dependency Array
     useEffect(()=>{
        console.log('4 - This is executed only once when component is renderd.')
    },[counter, counter2])

    // Example 5 - with  dependency multipale Array with props
    useEffect(()=>{
        console.log('5 - This is executed name props is changed.')
    },[name])


    return <div>
        Use Effect Example : {name}
        {counter}
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        {counter2}
        <button onClick={()=>setCounter2(counter2+1)}>Increment2</button>
    </div>
}