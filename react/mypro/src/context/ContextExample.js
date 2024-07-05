import React, { useContext, useState } from "react"

const MyContext = React.createContext();

export function ContextExample(){


    const[theme, setTheme] = useState('ligth')

    return <div>
        Parent Component {theme}
        <MyContext.Provider value={theme}>
        <ChildComponent></ChildComponent>
        </MyContext.Provider>
        <button onClick={()=>{
            setTheme(theme == 'light'?'dark':'light')
        }}>Change Theme</button>

    </div>
}

function ChildComponent(){
    return <div>
        Child
        {/* <GrandChildComponent theme={props.theme}></GrandChildComponent> */}
        <GrandChildComponent></GrandChildComponent>
    

    </div>
}

function GrandChildComponent(){
    const theme = useContext(MyContext)
    return <div>
        Grand : {theme}
        
    </div>
}
