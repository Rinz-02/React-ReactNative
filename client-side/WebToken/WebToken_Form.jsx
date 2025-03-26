import React, { useState } from 'react'
import './Form.css'
import axios from 'axios';

export default function WebTokenForm(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

  async function onClick(){
    const Request = await axios.post("http://localhost:8080/login" , {username,password});
    console.log(Request.data.message);
  }
    return<>
    <div>
        <input placeholder='Enter UserName' value={username} onChange={(e) => {setUsername(e.target.value)} }></input>
        <br></br>
        <input placeholder='Enter Password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
        <br></br>
        <button onClick={onClick}>Login</button>
    </div>
    </>
}