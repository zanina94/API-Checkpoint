import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListOfUser from './ListOfUser';

 function UserList() {
    const [data,setData] = useState(null);
    const [error, setError]= useState(null);
    const request = axios.get("https://jsonplaceholder.typicode.com/users");
    useEffect(()=>{
        request.then(function (response) {
            setData(response.data)
            // console.log({data});
            ListOfUser = [...data]
            console.log(ListOfUser);
          })
          .catch(function (error) {
            setError(error)
            console.log(error);
          })
    })

    return (
    <div>
        {data != null && <table class="table table-bordered table-striped">
            <thead>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>COMPANY</th>
                <th>ADDRESS</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>WEBSITE</th>
                </tr>
            </thead>
            <tbody>
            {data.map(user =>{return(
                <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.company.name}</td>
                <td>{user.address.suite}, {user.address.street}, {user.address.zipcode} {user.address.city}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                </tr>)
            })}
            </tbody>
        </table>}
    </div>
  )
}
export default UserList