import React, { useState } from "react";

export function InputChange(){

    const[name,setName] = useState('');

    // function ChangeHandle(event){
    //     setName(event.target.value);

    // }
    function CLickhadle(event){
        setName(event.taget.value);
    }

    return<>
    <input></input>
    <br/>
     <button onClick={CLickhadle}>Show</button>
     <p>{name}</p>
    </>

}