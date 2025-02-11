import React, { createContext, useState } from "react";


const[Code,setCode] = useState('');
const[Name,setName] = useState('');
const[ShowName,setShowName] = useState('');

export function name(event){
    
    setName(e.target.value)
   
}

export function pass(p){
    setCode(p.target.value)

}
 function showNameDemo(event){

    setShowName(Name)
     return(<>
     <p>Welcome </p>
     </>)
 }


export function Login(){
    return(<>
      <input value={name} onChange={name} placeholder="Enter UserName"></input>
      <input value={pass} onChange={pass} placeholder="Enter Password"></input>
      
      <button onClick={() => setShowName(!ShowName)}></button>
      {ShowName && <showNameDemo />}
    </>)
}

