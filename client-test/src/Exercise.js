import React, { useState } from 'react'

export default function Exercise() {

    const[user,setUser] = useState('');
     function onClick(e){
        setUser(e.target.value);
     }
  return (
    <div>
      <input placeholder='Enter User Name'/>
      <button onClick={onClick}>Submit</button>
      <p>{user}</p>
    </div>
  )
}
