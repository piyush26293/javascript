import { useState } from "react";
export  function UserProfile(user){
    // const user = {
    //     firstName: "Rohit",
    //     lastName: "sharma",
    //     age:60,
    //     gender:"male",
    //     isAdmin :true
    // }

    const [isLoading, setIsLoading] = useState(true);



    return isLoading && <div>
        <p>{user.firstName} {user.lastName}</p>
        <p>{user.age}</p>
        {user.isAdmin &&<p>{user.gender}</p>}
        {user.isAdmin ?<p>I am an admin</p>:<p>I am not admin</p>}
    </div>
}