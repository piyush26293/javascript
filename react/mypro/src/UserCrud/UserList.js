export function UserList({usersList, onUserDelete,onUserUpdate}){
    return  <table>
    <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Action</th>
    </thead>

    <tbody>
        {usersList.map(user=>{
           return <tr key={user.id}>
           <td>{user.firstName + ' ' + user.lastName}</td>
           <td>{user.email}</td>
           <td>{user.mobile}</td>
           <td>
            <button onClick={()=>{
                onUserUpdate(user)
            }}>Update</button>
            <button onClick={()=>{
                onUserDelete(user.id)
            }}>Delete</button>
           </td>
       </tr> 
        })}
        {/* <tr>
            <td>Rohit sharma</td>
            <td>rohit@gmail.com</td>
            <td>8373773783</td>
        </tr>
        <tr>
            <td>Rohit sharma</td>
            <td>rohit@gmail.com</td>
            <td>8373773783</td>
        </tr> */}
    </tbody>
</table>
}