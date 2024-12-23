import React,{useEffect,useState} from "react";
import { UseStaeEg } from "./ClassState";

export function UseEffectDemo(){
    // const [count,setCount] = useState('1');
    // const [isTrue,SetisTrue] = useState('false');

    // useEffect(() => {
    //     console.log("Use Effect Rendered!");
    // },[isTrue,count])

    // return(
    //     <>
    //     <div>
    //         <p>
    //             Count : is {count}  {isTrue && <>  is Ture</>}
    //         </p>
    //         <button onCLick={() => setCount(count +1)}>Count</button>
    //         <button onClick={() => SetisTrue(!isTrue)}>Change</button>
    //     </div>
    //     </>
    // )

    <GetUser />
  

    function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id : 1, name : "William"})
        })
    })
}

     function GetUser(){

    const [id,setid] = useState('loading...');
    const [name,setname] = useState('loading...');
    
    useEffect(() => {
        fetchUser().then(userInfo => {
            setid(userInfo.id);
            setname(userInfo.name);
        })
    })

    return(
        <>
        <useEffect />
        </>
    )
}




}



