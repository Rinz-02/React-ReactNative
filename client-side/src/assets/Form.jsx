import React, { useState } from 'react'
import './Form.css'
import axios from 'axios';


export default function Form() {

    const[user,setUser] = useState('');
    const[password,setPassword] = useState('');

    async function submit(){
         const Requeast = await axios.post("http://localhost:8080/login/form", {
            user,password
         })
         console.log(Requeast.data.message);

    }

  return (
    <div className='main'>
        <div className='form-container'>
            <div className='user-container'>
                <h4>UserName</h4>
                 <input value={user} onChange={(e) => {setUser(e.target.value)}}/> 
            </div>
            <div className='password-container'>
                <h4>Password</h4>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
            </div>
            <button onClick={submit}>Login</button>
        </div>
    </div>
  )
}
