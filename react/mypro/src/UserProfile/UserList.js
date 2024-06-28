import { UserProfile } from "./UserProfile"

export function UsersList(){
    const users = [
    {
        id:'1',
        firstName: "Rohit",
        lastName: "sharma",
        age:60,
        gender:"male",
        isAdmin :true
    },
    {
        id:'2',
        firstName: "Roasdfsahit",
        lastName: "shaasdfrma",
        age:60,
        gender:"male",
        isAdmin :true
    },
    {
        id:'3',
        firstName: "asdfsaRasohit",
        lastName: "asdfharma",
        age:60,
        gender:"male",
        isAdmin :true
    }
        
    ]

    return <div>User List

        {/* <UserProfile firstName="asdfsaRasohit" lastName="asdfharma" age={60} gender="male" isAdmin={true}></UserProfile>
        <hr></hr>
        <UserProfile firstName="asdfsaRasohit" lastName="asdfharma" age={60} gender="male" isAdmin={false}></UserProfile> */}
 
        {
            users.map(user=>{
                return <div key = {user.id}>
                    <UserProfile firstName={user.firstName} lastName={user.lastName} age={user.age} gender={user.gender} isAdmin={user.isAdmin}></UserProfile>
                </div>
            })
        }


         


    </div>
}