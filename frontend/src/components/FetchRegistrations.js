import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchRegistration = () => {
const [res,setRes]=useState([])

useEffect(()=>{
axios.get('http://localhost:8080/retrieve')
.then(response=>{
    setRes(response.data)
    console.log(response.data)
})},
[])
  return (

    <div><center><h1>Registration</h1>
    <table border ={1}>
      <tr>
        <th>Name</th>
        <th>Roles</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      {
        res.map((item, index) => (
         <tr key={index}>
          '<td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.role}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
         </tr> 
        ))}
    </table>
    </center>
  
    </div>

  )
}
export default FetchRegistration
