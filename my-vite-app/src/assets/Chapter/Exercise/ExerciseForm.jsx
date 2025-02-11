import React, { useState } from 'react'

export default function ExerciseForm() {
    const[user,setUser] = useState("_");
    const[show,setShow] = useState(" ");

    function onClick(user){
      setShow(user);
      return<>
      <h1>Login in as : {show}</h1>
      </>
    }
  return (
    <div>
      <input placeholder='Enter User Name' onChange={(event) => {setUser(event.target.value)}}></input> 
      <p>{user}</p>
      <button onClick={onClick}>Submit</button>
    </div>
  )
}
