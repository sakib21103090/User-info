import React, { useEffect, useState } from 'react';
import User from "../User/User";
import './Users.css'
const Users = () => {
    const [Users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1>Users Number:{Users.length}</h1>
            <div className='style-users'>
                {
            Users.map(user=>
               <User
               
               
               user={user}
               key={user.id} 

               ></User>
           
            )
}
            </div>
            
           
        </div>
    );
};

export default Users;