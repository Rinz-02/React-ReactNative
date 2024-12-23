import React from "react";
import { useState } from "react";
import { UseStaeEg } from "./ClassState";

export function Demo(){

    const [VarUserName,setVarUsername] = useState("");
    const [ShowName,setShowName] = useState("");
    const [show,setShow] = useState('');


    function handleChange(event){
        setVarUsername(event.target.value);
    }

    function handleClick(){
            setShowName(VarUserName);
        }

    

    return(

        <div>
            <button onClick={ () => setShow(!show)}>Show</button>
        
        <br />
        {show && (<>
        <div>
            <label>Enter UserName : </label>
            <input  
            value={VarUserName}
             onChange={handleChange}
             placeholder="UserName">
            </input>
            <br/>
            <button onClick={handleClick}>Submit</button>
            <p>Logged in as : {ShowName}</p>
            <Counter />
        </div>
        </>)}
        </div>
        
    )

}
export function Counter(){
    const [count,setCount] = useState('');

    const increaseCount = () => {
        setCount(count +1);
    }

    const decreaseCount = () => {
        setCount(count -1);
    }

    return(
        <>
        <p>Count : {count}</p>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        </>
    )
}