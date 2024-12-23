import React, { useEffect, useState } from "react";
import {Promise} from "bluebird";

Promise.config({cancellation: true}); 

function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id : 1,name : "william"
            })
        },2000)
    })
}

export function UseCancel(){
    const[id,setId] = useState("..loading");
    const[name,setName] = useState("...loading")

    useEffect(() => {
        const promise = fetchUser().then((user) => {
            setId(user.id),
            setName(user.name)
        });
            return() => {
        promise.cancel();
    }
    },[])

    return<>
     <p>Id : {id}</p>
     <p>Nmae : {name}</p>
    </>


}

export function ShowDemo(){
    const[show,setShow] = useState("");
    return(
        <>
        {show && <UseCancel />}
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </>
    )

} 