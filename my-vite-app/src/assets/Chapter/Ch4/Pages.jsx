import React, { useContext, useState } from "react";
import { userContext } from "../../../App";

  export function UserName(){
    const userName = useContext(userContext);
    return(
        <div>
            UserName : {userName}
        </div>
    );
  }



  export function Page1(){
    const [userName,setuserName] = useState('');
    return<>
    <p>Page1</p>
    {/* <UserName /> */}
    <input onChange={(event) => setuserName(event.target.value) } placeholder="enter username"></input>
    <p>{userName}</p>
    </>
  }
    export function Page2(){
    const [userName,setuserName] = useState('');
    return<>
    <p>Page2</p>
    {/* <UserName /> */}
    <input onChange={(event) => setuserName(event.target.value) } placeholder="enter username"></input>
    <p>{userName}</p>
    </>
  }
    export function Page3(){
    const [userName,setuserName] = useState('');
    return<>
    <p>Page3</p>
    {/* <UserName /> */}
    <input onChange={(event) => setuserName(event.target.value) } placeholder="enter username"></input>
    <p>{userName}</p>
    </>
  }

