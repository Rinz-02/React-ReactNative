import React from "react";
import { useState } from "react";


export function Demo1(){

    const[name,setName] = useState("");

     function nameChange(event)
{
    setName(event.target.vlaue)
}

     function submit(name){
       
    }

   
    return(
        <>
        <label>Name : </label>
        <input value={name} onChange={nameChange}></input>
        <button onClick={submit}>submit</button>
        <p>{name}</p>
        
        </>
    )

}