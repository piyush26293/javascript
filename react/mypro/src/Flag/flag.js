// conditional rendring
import { useState } from "react";

export function Flag(){
    const [isOnline, setIsOnline] = useState(false)

    const on = () =>{
        setIsOnline(true)
    }

    const off = () =>{
        setIsOnline(false)
    }

    const getButton = (handler, buttonName) =>{
        return <button onClick={handler}>{buttonName}</button>
    }

    return <div>
        {/* I am {isOnline + ''} */}
        I am {isOnline ? 'Online' : 'offline'}
        <br></br>
        {getButton(on, "On")}
        {getButton(off, "Off")}
    </div>
}
















//old flag program 

// import { useState } from "react";

// export function Flag(){
//     const [currentState, changeState] = useState('Online')

//     const on = () =>{
//         changeState('Online')
//     }

//     const off = () =>{
//         changeState('Offline')
//     }

//     return <div>
//         I am {currentState}
//         <br></br>
//         <button onClick={on}>on</button>
//         <button onClick={off}>off</button>
//     </div>
// }