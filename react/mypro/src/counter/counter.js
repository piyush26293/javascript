// export function Counter(){
//     return <div>Counter component</div> 
// }


export function Counter(props){
    console.log(props.name)
    const age =50;
    return <div>
        {`My name is ${props.name}, age ${age}`}

    </div>
}